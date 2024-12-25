const api = process.env.REACT_APP_API_URL;

export const getShipment = async (tracking_id, email) => {
    try {
        // Create filter string and encode it
        const filterParas = encodeURIComponent(`tracking_id='${tracking_id}'&&email='${email}'`);
        
        // Construct the API URL with the filter parameter
        const response = await fetch(`${api}/collections/shipments/records?filter=(${filterParas})`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Return the parsed response
        return await response.json();

    } catch (error) {
        console.error('Error:', error);
        throw error; // Optionally, rethrow the error for handling in the calling function
    }
}

export const getAllClearanceOffices = async () => {
    try {
        // Construct the API URL
        const response = await fetch(`${api}/collections/customer_clearance_offices/records`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Return the parsed response
        return await response.json();

    } catch (error) {
        console.error('Error:', error);
        throw error; // Optionally, rethrow the error for handling in the calling function
    }
}

export const getAllShipsRoutes = async () => {
    try {
        // Construct the API URL
        const response = await fetch(`${api}/collections/ship_brokerage_routes/records`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Return the parsed response
        return await response.json();

    } catch (error) {
        console.error('Error:', error);
        throw error; // Optionally, rethrow the error for handling in the calling function
    }
}