import React from 'react'
//Import SectionHeading
import SectionHeading from '../Common/SectionHeading'
//Import FormInput
import FormInput from "../Common/FormInput";

const TrackShipment = () => {
    let options1 = [
        {
            text: "Select a city...",
            value: ""
        },
        {
            text: "Singapore",
            value: "Singapore"
        },
        {
            text: "Rotterdam",
            value: "Rotterdam"
        },
        {
            text: "Shanghai",
            value: "Shanghai"
        },
        {
            text: "Los Angeles",
            value: "Los Angeles"
        },
        {
            text: "Hamburg",
            value: "Hamburg"
        },
        {
            text: "Dubai",
            value: "Dubai"
        },
        {
            text: "Busan",
            value: "Busan"
        },
        {
            text: "Antwerp",
            value: "Antwerp"
        },
        {
            text: "Hong Kong",
            value: "Hong Kong"
        },
        {
            text: "Port of New York and New Jersey",
            value: "New York"
        },
        {
            text: "Manila",
            value: "Manila"
        },
        {
            text: "Mumbai",
            value: "Mumbai"
        },
        {
            text: "Santos",
            value: "Santos"
        },
        {
            text: "Jebel Ali",
            value: "Jebel Ali"
        },
        {
            text: "Colombo",
            value: "Colombo"
        },
    ];
    

    
    const track_shipment = (e) => {
        e.preventDefault();
        // Redirect to track shipment page with query parameters
        window.location.href = `/your_shipment?id=${(e.target.tracking.value)}&email=${(e.target.email.value)}`;
    };
    return (
        <>
            <section id="track_shipment_area">
                <div className="container">
                    <SectionHeading heading="Track Your Shipment" para="Solving your supply chain needs from end to end, taking the
        complexity out of container shipping. We are at the forefront of developing innovation."/>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12 col-12">
                            <div className="track_area_form">
                                <form onSubmit={track_shipment} id="track_form_area">
                                
                                    <FormInput
                                        tag={'input'}
                                        type={'text'}
                                        name={'tracking'}
                                        classes={'form-control'}
                                        placeholder={'Eg: AWB Num or CB Num'}
                                        label={'Tracking Number'}
                                    />
                                    
                                    <FormInput
                                        tag='input'
                                        name={"email"}
                                        classes='form-control'
                                        label="Email Address"
                                    />
                                    
                                    <div className="track_now_btn">
                                        <button type='submit' className="btn btn-theme">Track Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TrackShipment

