import React, { useEffect, useState } from "react";

export const TechniciansList = () => {
    const [technicians, setTechnicians] = useState([]);

    const fetchTechnicians = async () => {
        const url = "http://localhost:8080/api/technicians/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    };

    // useEffects have two parameters: (1) an anonymous function and (2) a dependency array
    // useEffects do something at a given time
    useEffect(
        () => {
            // The something is the first parameter, an anonymous function
            fetchTechnicians();
        },
        // The given time is defined by the dependency array.
        // An empty array means "do it only once, at mounting (beginning)"
        []
    );

    return (
        <table className="table table-striped technicians-list-table">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Employee ID</th>
                </tr>
            </thead>
            <tbody>
                {technicians.map((technician) => {
                    return (
                        <tr key={technician.href}>
                            <td>{technician.first_name}</td>
                            <td>{technician.last_name}</td>
                            <td>{technician.employee_id}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
