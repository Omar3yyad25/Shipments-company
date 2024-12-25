import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeading from '../Common/SectionHeading';
import { getAllShipsRoutes } from '../../utilies/get_all';

const ShipRoutes = () => {
    const [ships, setShips] = useState(null); // Set initial state to null
    const [error, setError] = useState(null); // Optional: to handle errors
    const [filteredShips, setFilteredShips] = useState([]); // State for filtered ships
    console.log(ships);

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
                const shipsData = await getAllShipsRoutes();
                if (shipsData && shipsData.items.length > 0) {
                    setShips(shipsData.items); // Set ships data
                    setFilteredShips(shipsData.items); // Initially, show all ships
                } else {
                    setError("No ships found in this region.");
                }
            } catch (error) {
                setError("Failed to fetch ships details");
                console.error(error); // Log error for debugging
            }
        };

        getShipmentDetails(); // Call the function
    }, []);

    useEffect(() => {
        if (ships && query) {
            const delivery_port = query.get("delivery_port");
            const departure_port = query.get("departure_port");
            const cargo_type = query.get("cargo_type");
            const arrival_time = new Date(query.get("arrival_time"));
            const departure_time = new Date(query.get("departure_time"));
    
            // Normalize query parameters
            const normalizedDeliveryPort = delivery_port.trim().toLowerCase();
            const normalizedCargoType = cargo_type.trim().toLowerCase();
    
            const filtered = ships.filter(ship => {
                const shipDepartureTime = new Date(ship.departure_time);
                const shipArrivalTime = new Date(ship.arrival_time);
                const normalizedShipCargoTypes = ship.cargo_type.trim().toLowerCase().split(','); // Split if multiple cargo types
                const isCargoTypeMatch = normalizedShipCargoTypes.includes(normalizedCargoType);
    
                console.log(shipDepartureTime, departure_time, shipArrivalTime , arrival_time);
                // Time check
                // FIXME: there is a bug in this condition, it should be fixed
                const isTimeMatch = shipDepartureTime <= departure_time && shipArrivalTime >= arrival_time;
    
                // Ports check
                let isPortMatch = false;
    
                // Case 1: If the cargo's departure port and ship's departure port match
                if (normalizedDeliveryPort === ship.departure_port.trim().toLowerCase()) {
                    // Check if the arrival port of cargo is in the ship's passing ports or arrival port
                    const shipPassingPorts = ship.passing_ports.split(',').map(port => port.trim().toLowerCase());
                    isPortMatch = shipPassingPorts.includes(normalizedDeliveryPort) || ship.arrival_port.trim().toLowerCase().includes(normalizedDeliveryPort);
                }
                // Case 2: If the cargo's departure port is in the ship's passing ports
                else if (ship.passing_ports.split(',').map(port => port.trim().toLowerCase()).includes(normalizedDeliveryPort)) {
                    // Check if the arrival port of cargo is in the ship's passing ports or arrival port
                    const shipPassingPorts = ship.passing_ports.split(',').map(port => port.trim().toLowerCase());
                    isPortMatch = shipPassingPorts.includes(normalizedDeliveryPort) || ship.arrival_port.trim().toLowerCase().includes(normalizedDeliveryPort);
                }
    
                // Combine all conditions to filter the ships
                // TODO: Add more conditions if required
                return isCargoTypeMatch && isPortMatch;
            });
    
            setFilteredShips(filtered); // Update filtered ships
        }
    }, [ships, query]);
    
    
    
    return (
        <>
            <section id="track_shipment_area">
                <div className="container" style={{marginTop:'30px'}}>
                    <SectionHeading heading="Ship Routes Near You" />
                    <div className="row">
                        <div className="col-12  col-md-12 col-sm-12 col-12">
                            <div className="track_area_form">
                                {error && <p style={{ color: 'red' }}>{error}</p>}

                                {/* Display table of ships if data is available */}
                                {filteredShips.length > 0 ? (
                                    <div style={{ overflowX: 'auto' }}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Vessel Name</th>
                                                <th>Vessel Type</th>
                                                <th>Vessel Capacity</th>
                                                <th>IMO</th>
                                                <th>Departure Time</th>
                                                <th>Arrival Time</th>
                                                <th>Departure Port</th>
                                                <th>Passing Ports</th>
                                                <th>Arrival Port</th>
                                                <th>Broker Name</th>
                                                <th>Broker Email</th>
                                                <th>Broker Phone</th>
                                                <th>Cargo Type</th>
                                                <th>Total Cargo Weight</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredShips.map((ship, index) => (
                                                <tr key={index}>
                                                    <td>{ship.vessel_name}</td>
                                                    <td>{ship.vessel_type}</td>
                                                    <td>{ship.vessel_capacity}</td>
                                                    <td>{ship.imo}</td>
                                                    <td>{ship.departure_time}</td>
                                                    <td>{ship.arrival_time}</td>
                                                    <td>{ship.departure_port}</td>
                                                    <td>{ship.passing_ports}</td>
                                                    <td>{ship.arrival_port}</td>
                                                    <td>{ship.broker_name}</td>
                                                    <td>
                                                        <a href={`mailto:${ship.broker_email}`}>Email Broker</a>
                                                    </td>
                                                    <td>{ship.broker_phone_number}</td>
                                                    <td>{ship.cargo_type}</td>
                                                    <td>{ship.total_cargo_weight}</td>
                                                    
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    </div>
                                ) : (
                                    <p>No ships found matching.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShipRoutes;
