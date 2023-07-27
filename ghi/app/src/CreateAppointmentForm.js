import React, { useEffect, useState } from "react";

export const CreateAppointmentForm = () => {

    // Form Data
    const [vin, setVin] = useState("");
    const [customer, setCustomer] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [technician, setTechnician] = useState("");
    const [reason, setReason] = useState("");

    // Handlers: onChange (helper functions)
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    };

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    };

    const handleDateTimeChange = (event) => {
        const value = event.target.value;
        setDateTime(value);
    };

    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
    };

    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
    };

    // Handler: onSubmit (helper function)
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.vin = vin;
        data.customer = customer;
        data.date_time = dateTime;
        data.technician = technician;
        data.reason = reason;

        const appointmentsUrl = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(appointmentsUrl, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();

            setVin("");
            setCustomer("");
            setDateTime("");
            setTechnician("");
            setReason("");
        }
    };

    // JSX
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Service Appointment</h1>
                    <form onSubmit={handleSubmit} id="create-appointment-form">
                        <div className="form-floating mb-3">
                            <input
                                value={vin}
                                onChange={handleVinChange}
                                placeholder="VIN"
                                required
                                type="text"
                                name="vin"
                                id="vin"
                                className="form-control"
                            />
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={customer}
                                onChange={handleCustomerChange}
                                placeholder="Customer"
                                required
                                type="text"
                                name="customer"
                                id="customer"
                                className="form-control"
                            />
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={dateTime}
                                onChange={handleDateTimeChange}
                                placeholder="Date and Time"
                                required
                                type="datetime-local"
                                name="dateTime"
                                id="dateTime"
                                className="form-control"
                            />
                            <label htmlFor="dateTime">Date and Time</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={technician}
                                onChange={handleTechnicianChange}
                                placeholder="Technician"
                                required
                                type="text"
                                name="technician"
                                id="technician"
                                className="form-control"
                            />
                            <label htmlFor="technician">Technician</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={reason}
                                onChange={handleReasonChange}
                                placeholder="Reason"
                                required
                                type="text"
                                name="reason"
                                id="reason"
                                className="form-control"
                            />
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
