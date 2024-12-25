import React from 'react';
import FormInput from './FormInput';
import { requestClearance } from '../../utilies/requests';
import ports from '../../utilies/ports.json'; // Adjust the path if necessary

const RequestClearance = () => {
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
        cargo_type: formData.get('cargo_type'),
        total_weight: Number(formData.get('weight')),
        departure_port: formData.get('departure_port'),
        delivery_port: formData.get('destination_port'),
        container_type: formData.get('container_type'),
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        email: formData.get('email'),
        phone_number: formData.get('phone_number'),
        message: formData.get('special_instructions'),
    };

    let response = await requestClearance(data);
    if (response.id) {
      alert("Quote request sent successfully");
    } else {
      alert("Failed to send quote request");
    }
    //redirect to Clearance Offices page with query parameters
    window.location.href = "/clearance_offices?delivery-port=" + formData.get('destination_port');
  
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
                      <h3>Request Customs Clearance Quote</h3>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <FormInput
                      name={"cargo_type"}
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
                      placeholder={"Total Weight (KG)"}
                      label="Total Weight (KG)"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name={"departure_port"}
                      tag="select"
                      classes="form-control"
                      options={cities}
                      label="Departure Port"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name={"destination_port"}
                      tag="select"
                      classes="form-control"
                      options={cities}
                      label="Destination Port"
                    />
                  </div>

                  <div className="col-lg-6">
                    <FormInput
                      name={"container_type"}
                      tag="select"
                      classes="form-control"
                      options={[
                        { value: "20' Container", text: "20' Container" },
                        { value: "40' Container", text: "40' Container" },
                        { value: "Refrigerated Container", text: "Refrigerated Container" },
                        { value: "Flat Rack", text: "Flat Rack" },
                        { value: "Open Top", text: "Open Top" },
                      ]}
                      label="Container Type"
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="heading_quote area_top">
                      <h3>Your Contact Information</h3>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"text"}
                      name={"first_name"}
                      classes={"form-control"}
                      placeholder={"First Name"}
                      label="First Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"text"}
                      name={"last_name"}
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
                      placeholder={"Email Address"}
                      label="Email Address"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      tag={"input"}
                      type={"text"}
                      name={"phone_number"}
                      classes={"form-control"}
                      placeholder={"Phone Number"}
                      label="Phone Number"
                    />
                  </div>
                  <div className="col-lg-12">
                    <FormInput
                      tag={"textarea"}
                      type={"text"}
                      name={"special_instructions"}
                      classes={"form-control"}
                      placeholder={"Any Special Instructions"}
                      label="Special Instructions"
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="quote_submit_button">
                      <button type="submit" className="btn btn-theme">Submit and Proceed</button>
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
};

export default RequestClearance;
