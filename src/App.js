import React from 'react'
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
// Import Page Layout 
import Navbar from './component/Common/Navbar'
import Footer from './component/Common/Footer'
import CopyRight from './component/Common/CopyRight'
// Import All Components 
import Home_Two from './page/index2'
import About from './page/About'
import Service from './page/Service'
import ServiceDetails from './page/ServiceDetails'
import OurTeamArea from './page/OurTeam'
import Testimonials from './page/Testimonial'
import Faqs from './page/Faqs'
import TrackYourShip from './page/TrackYourShip'
import SignUp from './page/SignUp'
import SignIn from './page/SignIn'
import PrivacyPolicy from './page/PrivacyPolicy'
import TermsCondition from './page/TermsCondition'
import Error from './page/Error'
import Contact from './page/Contact'
import RequestQuote from './page/RequestQuote'
import YourShip from './page/YourShip'
import RequestClearance from './page/RequestClearance'
import ClearanceOffice from './page/ClearanceOffices'
import RequestRoute from './page/RequestRoute'
import ShipRoutes from './component/ShipRoutes'
// Import ScrollToTop Components 
import ScrollToTop from './component/ScrollToTop'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Router>
                    <ScrollToTop>
                        <Navbar/>
                        <Switch>
                            <Route path='/' exact component={Home_Two}/>
                            <Route path='/about' exact component={About}/>
                            <Route path='/service' exact component={Service}/>
                            <Route path='/service_details' exact component={ServiceDetails}/>
                            {/* <Route path='/blog_grid' exact component={BlogGrid}/>
                            <Route path='/blog_with_sidebar' exact component={BlogWithSidebar}/>
                            <Route path='/blog_details' exact component={BlogDetails}/> */}
                            <Route path='/our_team' exact component={OurTeamArea}/>
                            <Route path='/testimonials' exact component={Testimonials}/>
                            {/* <Route path='/gallery' exact component={Gallery}/> */}
                            <Route path='/faqs' exact component={Faqs}/>
                            <Route path='/track_ship' exact component={TrackYourShip}/>
                            {/* <Route path='/pricing' exact component={PricingContent}/> */}
                            <Route path='/request_quote' exact component={RequestQuote}/>
                            {/* <Route path='/signup' exact component={SignUp}/>
                            <Route path='/signIn' exact component={SignIn}/> */}
                            <Route path='/privacyPolicy' exact component={PrivacyPolicy}/>
                            <Route path='/terms' exact component={TermsCondition}/>
                            <Route path='/contact' exact component={Contact}/>
                            <Route path='/your_shipment' exact component={YourShip}/>
                            <Route path='/clearance_offices' exact component={ClearanceOffice}/>
                            <Route path='/request_route' exact component={RequestRoute}/>
                            <Route path='/request_clearance' exact component={RequestClearance}/>
                            <Route path='/ship_routes' exact component={ShipRoutes}/>
                            <Route exact component={Error}/>
                        </Switch>
                        <Footer/>
                        <CopyRight/>
                    </ScrollToTop>
                </Router>
            </BrowserRouter>
        </>
    )
}

export default App
