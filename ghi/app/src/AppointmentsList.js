import React, { useEffect, useState } from "react";

export const AppointmentsList = () => {
    const [appointments, setAppointments] = useState([]);
    const [automobiles, setAutomobiles] = useState([]);

    const fetchAppointments = async () => {
        const url = "http://localhost:8080/api/appointments/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments);
        }
    };

    const fetchAutomobiles = async () => {
        const url = "http://localhost:8100/api/automobiles/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.automobiles);
        }
    };

    // useEffects have two parameters: (1) an anonymous function and (2) a dependency array
    // useEffects do something at a given time
    useEffect(
        () => {
            // The something is the first parameter, an anonymous function
            fetchAppointments();
            fetchAutomobiles();
        },
        // The given time is defined by the dependency array.
        // An empty array means "do it only once, at mounting (beginning)"
        []
    );

    const handleCancel = async (id) => {
        const url = `http://localhost:8080/api/appointments/${id}/cancel`;

        const fetchConfig = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            fetchAppointments();
        }
    };

    const handleFinish = async (id) => {
        const url = `http://localhost:8080/api/appointments/${id}/finish`;

        const fetchConfig = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            fetchAppointments();
        }
    };


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Service Appointments</h1>
                    {appointments.map((appointment) => (
                        <div key={appointment.id}>
                            <p>VIN: {appointment.vin}</p>
                            <p>Customer: {appointment.customer}</p>
                            <p>Date and Time: {appointment.date_time}</p>
                            <p>Technician: {appointment.technician.first_name}</p>
                            <p>Reason: {appointment.reason}</p>
                            <p>VIP: {automobiles.some(auto => auto.vin === appointment.vin) ? "Yes" : "No"}</p>
                            <button onClick={() => handleCancel(appointment.id)}>Cancel</button>
                            <button onClick={() => handleFinish(appointment.id)}>Finish</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
