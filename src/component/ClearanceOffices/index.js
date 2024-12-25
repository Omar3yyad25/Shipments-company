import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeading from '../Common/SectionHeading';
import { getAllClearanceOffices } from '../../utilies/get_all';

const ClearanceOffices = () => {
    const [offices, setOffices] = useState(null); // Set initial state to null
    const [error, setError] = useState(null); // Optional: to handle errors
    const [filteredOffices, setFilteredOffices] = useState([]); // State for filtered offices
    console.log(offices);

    // Function to parse query parameters
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    const query = useQuery();
    const delivery_port = query.get("delivery-port");
    console.log(delivery_port);

    useEffect(() => {
        const getShipmentDetails = async () => {
            try {
                // Call API to get shipment details and await the result
                const officesData = await getAllClearanceOffices();
                if (officesData && officesData.items.length > 0) {
                    setOffices(officesData.items); // Set offices data
                    setFilteredOffices(officesData.items); // Initially, show all offices
                } else {
                    setError("No offices found in this region.");
                }
            } catch (error) {
                setError("Failed to fetch offices details");
                console.error(error); // Log error for debugging
            }
        };

        getShipmentDetails(); // Call the function
    }, []);

    useEffect(() => {
        if (delivery_port && offices) {
            console.log('Query Parameter:', delivery_port); // Log the query parameter
            console.log('Offices:', offices); // Log the offices data for inspection
    
            const normalizedDeliveryPort = delivery_port.trim().toLowerCase(); // Trim and normalize the query string
    
            const filtered = offices.filter(office => {
                const normalizedCountry = office.port.trim().toLowerCase(); // Trim and normalize the office country
    
                // Log each comparison to debug
                console.log('Normalized Query:', normalizedDeliveryPort);
                console.log('Normalized Country:', normalizedCountry);
    
                // Check if delivery-port (query) matches the country
                return normalizedCountry.includes(normalizedDeliveryPort);
            });
    
            setFilteredOffices(filtered); // Set the filtered offices
        }
    }, [delivery_port, offices]);
    
    

    return (
        <>
            <section id="track_shipment_area">
                <div className="container">
                    <SectionHeading heading="Clearance Offices Near You" />
                    <div className="row">
                        <div className="col-12  col-md-12 col-sm-12 col-12">
                            <div className="track_area_form">
                                {error && <p style={{ color: 'red' }}>{error}</p>}

                                {/* Display table of offices if data is available */}
                                {filteredOffices.length > 0 ? (
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Office Name</th>
                                                <th>Address</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Location</th>
                                                <th>Enquire by Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredOffices.map((office, index) => (
                                                <tr key={index}>
                                                    <td>{office.name}</td>
                                                    <td>{office.address}</td>
                                                    <td>{office.email}</td>
                                                    <td>{office.phone_number}</td>
                                                    <td><a href={office.location} style={{color:"blue"}}target="_blank" rel="noopener noreferrer">View Location</a></td>
                                                    <td><a href={`mailto:${office.email}`} style={{color:"blue"}}>Enquire</a></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>No offices found matching.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClearanceOffices;
