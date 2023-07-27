import React, { useEffect, useState } from "react";

export const AddTechnicianForm = () => {
    // State Selection Data
    const [automobiles, setAutomobiles] = useState([]);

    // Form Data
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [employeeId, setEmployeeId] = useState("");

    // Handlers: onChange (helper functions)
    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    };

    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    };

    const handleEmployeeIdChange = (event) => {
        const value = event.target.value;
        setEmployeeId(value);
    };

    // Handler: onSubmit (helper function)
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeId;

        const techniciansUrl = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(techniciansUrl, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();

            setFirstName("");
            setLastName("");
            setEmployeeId("");
        }
    };

    // JSX
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a technician</h1>
                    <form onSubmit={handleSubmit} id="create-shoe-form">
                        <div className="form-floating mb-3">
                            <input
                                value={firstName}
                                onChange={handleFirstNameChange}
                                placeholder="First Name"
                                required
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="form-control"
                            />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={lastName}
                                onChange={handleLastNameChange}
                                placeholder="Last Name"
                                required
                                type="text"
                                name="lastName"
                                id="lastName"
                                className="form-control"
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={employeeId}
                                onChange={handleEmployeeIdChange}
                                placeholder="Employee ID"
                                required
                                type="text"
                                name="employeeId"
                                id="employeeId"
                                className="form-control"
                            />
                            <label htmlFor="employeeId">Employee ID</label>
                        </div>
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
