import React from 'react'
import {GoogleMap, LoadScript} from '@react-google-maps/api';

// Map Area
const Map = () => {
    const mapStyles = {
        height: "50vh",
        width: "100%",
        margin: "0 0 0 0"
    };
    const defaultCenter = {
        lat: 31.21564, lng: 29.95527
    }
    return (
        <>
            <LoadScript googleMapsApiKey="AIzaSyDtygZ5JPTLgwFLA8nU6bb4d_6SSLlTPGw">
                <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}></GoogleMap>
            </LoadScript>
        </>
    )
}

export default Map
