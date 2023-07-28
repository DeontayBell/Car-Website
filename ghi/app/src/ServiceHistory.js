import React, { useEffect, useState } from "react";

export const ServiceHistory = () => {
    const [appointments, setAppointments] = useState([]);
    const [searchVin, setSearchVin] = useState("");
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    useEffect(() => {
        fetchAppointments();
    }, []);

    useEffect(() => {
        filterAppointments();
    }, [searchVin, appointments]);

    const fetchAppointments = async () => {
        const response = await fetch("http://localhost:8080/api/appointments/");
        const data = await response.json();
        setAppointments(data.appointments);
    };

    const filterAppointments = () => {
        const filtered = appointments.filter(appointment => appointment.vin.includes(searchVin));
        setFilteredAppointments(filtered);
    };

    const handleSearchChange = (event) => {
        setSearchVin(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        filterAppointments();
    };


    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Service History</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={searchVin} onChange={handleSearchChange} placeholder="Search by VIN" />
                        <button type="submit">Search</button>
                    </form>
                    <ul>
                        {filteredAppointments.map(appointment => (
                            <li key={appointment.id}>
                                <p>VIN: {appointment.vin}</p>
                                <p>Is VIP? {appointment.vip ? "Yes" : "No"}</p>
                                <p>Customer: {appointment.customer}</p>
                                <p>Date and Time: {appointment.date_time}</p>
                                <p>Technician: {appointment.technician}</p>
                                <p>Reason: {appointment.reason}</p>
                                <p>Status: {appointment.status}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
