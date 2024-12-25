import React from 'react'
import CommonBanner from '../component/Common/Banner'
import ClearanceOffices from '../component/ClearanceOffices'
import OurPartner from '../component/Common/OurPartner'

const TrackYourShip = () => {
    return (
        <>
            <CommonBanner heading="Clearance Offices" page="Clearance Offices"/>
            <ClearanceOffices/>
            <OurPartner/>
        </>
    )
}

export default TrackYourShip
