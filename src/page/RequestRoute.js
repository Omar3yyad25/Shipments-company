import React from 'react'
import CommonBanner from '../component/Common/Banner'
import RequestRouteForm from '../component/Common/RequestRouteForm'
import OurPartner from '../component/Common/OurPartner'

const RequestQuote = () => {
 return (
   <>
     <CommonBanner heading="Request Route" page="Request Route" />
     <RequestRouteForm/>
     {/* <OurPartner /> */}
   </>
 );
}

export default RequestQuote
