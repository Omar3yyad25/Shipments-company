import React from 'react'
import CommonBanner from '../component/Common/Banner'
import RequestClearanceForm from '../component/Common/RequestClearanceForm'
import OurPartner from '../component/Common/OurPartner'

const RequestQuote = () => {
 return (
   <>
     <CommonBanner heading="Request Clearance" page="Request Clearance" />
     <RequestClearanceForm/>
     <OurPartner />
   </>
 );
}

export default RequestQuote
