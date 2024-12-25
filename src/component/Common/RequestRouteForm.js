import React from 'react';
import FormInput from './FormInput';
import { requestRoute } from '../../utilies/requests';
import ports from '../../utilies/ports.json'; // Adjust the path if necessary

const RequestRoute = () => {
  const vessel_types = [
    { value: "Bulk Carrier", text: "Bulk Carrier" },
    { value: "Container Ship", text: "Container Ship" },
    { value: "Tanker", text: "Tanker" },
    { value: "Passenger Ship", text: "Passenger Ship" },
    { value: "Other", text: "Other" },
  ];

  const cargo_types = [
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
        vessel_name: formData.get('vessel_name'),
        vessel_type: formData.get('vessel_type'),
        vessel_capacity: Number(formData.get('vessel_capacity')),
        imo: Number(formData.get('imo')),
        departure_time: formData.get('departure_time'),
        arrival_time: formData.get('arrival_time'),
        departure_port: formData.get('departure_port'),
        arrival_port: formData.get('arrival_port'),
        passing_ports: formData.get('passing_ports'), // Split comma-separated values into an array
        broker_name: formData.get('broker_name'),
        broker_email: formData.get('broker_email'),
        broker_phone_number: formData.get('broker_phone_number'),
        cargo_type: formData.get('cargo_type'), // Split comma-separated values into an array
        total_cargo_weight: Number(formData.get('total_cargo_weight')),
    };
    data.departure_time = new Date(data.departure_time).toISOString();
    data.arrival_time = new Date(data.arrival_time).toISOString();

    console.log(data);

    let response = await requestRoute(data);
    if (response.id) {
        alert("Route registered successfully");
    } else {
        alert("Failed to register route");
    }
};


  return (
    <>
      <section id="request_quote_form_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form id="request_form" onSubmit={submit_quote}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading_quote">
                      <h3>Register Ship Brokerage Route</h3>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <FormInput
                      name="vessel_name"
                      tag="input"
                      type="text"
                      classes="form-control"
                      placeholder="Vessel Name"
                      label="Vessel Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name="vessel_type"
                      tag="select"
                      classes="form-control"
                      options={vessel_types}
                      label="Vessel Type"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name="vessel_capacity"
                      tag="input"
                      type="number"
                      classes="form-control"
                      placeholder="Vessel Capacity"
                      label="Vessel Capacity (Tons)"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name="imo"
                      tag="input"
                      type="number"
                      classes="form-control"
                      placeholder="IMO Number"
                      label="IMO Number"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name="departure_time"
                      tag="input"
                      type="datetime-local"
                      classes="form-control"
                      label="Departure Time"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name="arrival_time"
                      tag="input"
                      type="datetime-local"
                      classes="form-control"
                      label="Arrival Time"
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
                      name={"arrival_port"}
                      tag="select"
                      classes="form-control"
                      options={cities}
                      label="Destination Port"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name={"passing_ports"}
                      tag="select"
                      classes="form-control"
                      options={cities}
                      multiSelect={true}
                      label="Transit Ports"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name="broker_name"
                      tag="input"
                      type="text"
                      classes="form-control"
                      placeholder="Broker Name"
                      label="Broker Name"
                    />
                  </div>
                  {/*broker phone number and email*/}
                  <div className="col-lg-6">
                    <FormInput
                      name="broker_email"
                      tag="input"
                      type="email"
                      classes="form-control"
                      placeholder="Broker Email"
                      label="Broker Email"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name="broker_phone_number"
                      tag="input"
                      type="tel"
                      classes="form-control"
                      placeholder="Broker Phone Number"
                      label="Broker Phone Number"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name="cargo_type"
                      tag="select"
                      classes="form-control"
                      multiSelect={true}
                      options={cargo_types}
                      label="Cargo Type"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormInput
                      name="total_cargo_weight"
                      tag="input"
                      type="number"
                      classes="form-control"
                      placeholder="Total Cargo Weight (KG)"
                      label="Total Cargo Weight"
                    />
                  </div>

                  <div className="col-lg-12">
                    <div className="quote_submit_button">
                      <button type="submit" className="btn btn-theme">Submit</button>
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

export default RequestRoute;
