const api = process.env.REACT_APP_API_URL;

export const requestQuote = async (data) => {
    try {
        // post request to the api
        const response = await fetch(`${api}/collections/requested_quotes/records`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        // return the response
        return response.json();

    } catch (error) {
        console.error('Error:', error);
    }
}

export const requestClearance = async (data) => {
    try {
        // post request to the api
        const response = await fetch(`${api}/collections/customer_clearance_requests/records`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        // return the response
        return response.json();

    } catch (error) {
        console.error('Error:', error);
    }
}

export const requestRoute = async (data) => {
    try {
        // post request to the api
        const response = await fetch(`${api}/collections/ship_brokerage_routes/records`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        // return the response
        return response.json();

    } catch (error) {
        console.error('Error:', error);
    }
}


