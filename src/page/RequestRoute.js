import React from 'react'
import CommonBanner from '../component/Common/Banner'
import RequestRouteForm from '../component/Common/RequestRouteForm'
import OurPartner from '../component/Common/OurPartner'

const RequestQuote = () => {
 return (
   <>
     <CommonBanner heading="Request Clearance" page="Request Clearance" />
     <RequestRouteForm/>
     <OurPartner />
   </>
 );
}

export default RequestQuote
