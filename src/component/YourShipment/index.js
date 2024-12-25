import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// Import SectionHeading
import SectionHeading from '../Common/SectionHeading';
import { getShipment } from '../../utilies/get_all';

const TrackShipment = () => {
    const [shipment, setShipment] = useState(null); // Set initial state to null
    const [error, setError] = useState(null); // Optional: to handle errors

    // Function to parse query parameters
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery();
    const id = query.get("id");
    const email = query.get("email");

    console.log(id, email);

    useEffect(() => {
        const getShipmentDetails = async (id, email) => {
            try {
                // Call API to get shipment details and await the result
                const shipmentData = await getShipment(id, email);

                // Check if items array exists and has data
                if (shipmentData && shipmentData.items && shipmentData.items.length > 0) {
                    setShipment(shipmentData.items[0]); // Set shipment to the first item
                } else {
                    setError("No shipment found."); // Optional error handling
                }
            } catch (error) {
                setError("Failed to fetch shipment details"); // Handle any errors
                console.error(error); // Log error for debugging
            }
        };

        if (id && email) {
            getShipmentDetails(id, email);
        }
    }, [id, email]);

    return (
        <>
            <section id="track_shipment_area">
                <div className="container">
                    <SectionHeading heading="Your Shipment Details" />
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="track_area_form">
                                {/* Display shipment details if available */}
                                {shipment ? (
                                    <div>
                                        <p><strong>Tracking ID:</strong> {shipment.tracking_id}</p>
                                        <p><strong>Email:</strong> {shipment.email}</p>

                                        <p><strong>Current Port:</strong> {shipment.current_port}</p>
                                        <p><strong>Delivery City:</strong> {shipment.delivery_city}</p>
                                        <p><strong>Departure City:</strong> {shipment.departure_city}</p>
                                    </div>
                                ) : (
                                    <p style={{ color: 'red' }}>{error}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TrackShipment;
