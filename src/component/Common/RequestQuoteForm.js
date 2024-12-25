import React from 'react';
import FormInput from '../Common/FormInput';
import { requestQuote } from '../../utilies/requests';
import ports from '../../utilies/ports.json'; // Adjust the path if necessary

const RequestQuoteForm = () => {
  let cargo_types = [
    { value: "General Cargo", text: "General Cargo" },
    { value: "Gas", text: "Gas" },
    { value: "Liquid", text: "Liquid" },
    { value: "Heavy", text: "Heavy" },
    { value: "Fragile", text: "Fragile" },
    { value: "Perishable", text: "Perishable" },
    { value: "Bulk", text: "Bulk" },
    { value: "Dry", text: "Dry" },
    { value: "Refrigerated", text: "Refrigerated" },
    { value: "Other", text: "Other" },
  ];

  // Create a cities array using port data
  let cities = [
    ...Object.values(ports).map(port => ({
      text: `${port.name} - ${port.country}`,
      value: `${port.name} - ${port.country}`
    }))
  ];

  const submit_quote = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        cargo_type: formData.get('type'),
        total_weight: Number(formData.get('weight')),
        departure_city: formData.get('departure'),
        departure_time: formData.get('departure_time'),
        arrival_time: formData.get('arrival_time'),
        delivery_city: formData.get('city'),
        dimensions: formData.get('dimension'),
        first_name: formData.get('fname'),
        last_name: formData.get('lname'),
        email: formData.get('email'),
        phone_number: formData.get('number'),
        message: formData.get('text'),
    };
    data.departure_time = new Date(data.departure_time).toISOString();
    data.arrival_time = new Date(data.arrival_time).toISOString();

    let response = await requestQuote(data);
    if (response.id) {
      alert("Quote request sent successfully");
    } else {
      alert("Failed to send quote request");
    }

    // redirect to ship routes page
    window.location.href = '/ship_routes?departure_port=' + data.departure_city + '&delivery_port='+data.delivery_city+'&cargo_type=' + data.cargo_type+'&arrival_time='+data.arrival_time+'&departure_time='+data.departure_time;
  };

  return (
    <>
      <section id="request_quote_form_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-md-12 col-12">
              <form id="request_form" onSubmit={submit_quote}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading_quote">
                      <h3>Get a quote</h3>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <FormInput
                      name={"type"}
                      tag="select"
                      classes="form-control"
                      options={cargo_types}
                      label="Cargo Type"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"number"}
                      name={"weight"}
                      classes={"form-control"}
                      placeholder={"Total gross weight (KG)"}
                      label="Total gross weight (KG)"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name={"departure"}
                      tag="select"
                      classes="form-control"
                      options={cities}
                      label="Departure city"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name={"city"}
                      tag="select"
                      classes="form-control"
                      options={cities}
                      label="Delivery city"
                    />
                  </div>
                  {/*departure time and arrival time */}
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"datetime-local"}
                      name={"departure_time"}
                      classes={"form-control"}
                      label="Departure Time"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"datetime-local"}
                      name={"arrival_time"}
                      classes={"form-control"}
                      label="Arrival Time"
                    />
                  </div>
                  
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"text"}
                      name={"dimension"}
                      classes={"form-control"}
                      placeholder={"Dimension"}
                      label="Dimension"
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="heading_quote arae_top">
                      <h3>Your Personal Details</h3>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"text"}
                      name={"fname"}
                      classes={"form-control"}
                      placeholder={"First Name"}
                      label="First Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"text"}
                      name={"lname"}
                      classes={"form-control"}
                      placeholder={"Last Name"}
                      label="Last Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"email"}
                      name={"email"}
                      classes={"form-control"}
                      placeholder={"Email"}
                      label="Your Email"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"text"}
                      name={"number"}
                      classes={"form-control"}
                      placeholder={"Phone Number"}
                      label="Phone Number"
                    />
                  </div>
                  <div className="col-lg-12">
                    <FormInput
                      tag={"textarea"}
                      type={"text"}
                      name={"text"}
                      classes={"form-control"}
                      placeholder={"Your Message"}
                      label="Your Message"
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="quote_submit_button">
                      <button type='submit' className="btn btn-theme">Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RequestQuoteForm;
