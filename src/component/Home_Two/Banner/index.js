import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import FormInput
import FormInput from '../../Common/FormInput';
// OwlCarousel Slider Import
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomeBannerTwo = () => {
    const [trackingId, setTrackingId] = useState('');
    const [email, setEmail] = useState('');

    let responsive = {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        960: {
            items: 1,
        },
        1200: {
            items: 1,
        },
    };

    const track_shipment = (e) => {
        e.preventDefault();
        // Redirect to track shipment page with query parameters
        window.location.href = `/your_shipment?id=${(e.target.Tracking_Id.value)}&email=${(e.target.email.value)}`;
    };

    return (
        <>
            <section id="homeTwo_banner">
                <div className="banner-slider-two">
                    <OwlCarousel
                        className="owl-theme"
                        responsive={responsive}
                        autoplay={true}
                        autoplayHoverPause={true}
                        autoplayTimeout={4000}
                        loop={true}
                        nav={false}
                        dots={false}
                    >
                        <div className="banner-item-two banner-two-img-one">
                            <div className="container">
                                <div className="banner_two_inner">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="banner-text-two">
                                                <h1>Reliable Shipping, Every Time</h1>
                                                <p>Streamlining international trade with efficient and reliable logistics. Let us handle the complexities while you focus on your business.</p>
                                                <Link className="btn btn-theme" to="/request_quote">Get A Quote</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="track_order_banner">
                                                <h3>Track Your Order</h3>
                                                <form onSubmit={track_shipment} className="from-tracking">
                                                    <FormInput
                                                        tag={'input'}
                                                        type={'text'}
                                                        name={'Tracking_Id'}
                                                        classes={'form-control'}
                                                        placeholder={'Tracking Id no:'}
                                                        onChange={(e) => setTrackingId(e.target.value)} // Update state on input change
                                                    />
                                                    <FormInput
                                                        tag={'input'}
                                                        type={'text'}
                                                        name={'email'}
                                                        classes={'form-control'}
                                                        placeholder={'Email Address'}
                                                        onChange={(e) => setEmail(e.target.value)} // Update state on input change
                                                    />
                                                    <div className="track_now_btn">
                                                        <button type='submit' className="btn btn-theme">Track Now</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-item-two banner-two-img-one">
                            <div className="container">
                                <div className="banner_two_inner">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="banner-text-two">
                                                <h1>Global Trade, Simplified</h1>
                                                <p>Experience efficient, reliable, and cost-effective freight services.</p>
                                                <Link className="btn btn-theme" to="/contact">Contact us</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="track_order_banner">
                                                <h3>Track Your Order</h3>
                                                <form action="#!" className="from-tracking">
                                                    <FormInput
                                                        tag={'input'}
                                                        type={'text'}
                                                        name={'Tracking_Id'}
                                                        classes={'form-control'}
                                                        placeholder={'Tracking Id no:'}
                                                        onChange={(e) => setTrackingId(e.target.value)} // Update state on input change
                                                    />
                                                    <FormInput
                                                        tag={'input'}
                                                        type={'text'}
                                                        name={'email'}
                                                        classes={'form-control'}
                                                        placeholder={'Email Address'}
                                                        onChange={(e) => setEmail(e.target.value)} // Update state on input change
                                                    />
                                                    <FormInput
                                                        tag={'button'}
                                                        val={'Track Now'}
                                                    />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </>
    );
}

export default HomeBannerTwo;
