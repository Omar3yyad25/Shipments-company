import React from 'react'
import CommonBanner from '../component/Common/Banner'
import Shipment from '../component/YourShipment'
import OurPartner from '../component/Common/OurPartner'

const TrackYourShip = () => {
    return (
        <>
            <CommonBanner heading="Your Shipment" page="Your Shipment"/>
            <Shipment/>
            <OurPartner/>
        </>
    )
}

export default TrackYourShip
