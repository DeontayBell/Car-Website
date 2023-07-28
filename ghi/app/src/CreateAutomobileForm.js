import React, { useState } from "react";

export const CreateAutomobileForm = () => {
    const [color, setColor] = useState("");
    const [year, setYear] = useState("");
    const [vin, setVin] = useState("");
    const [modelId, setModelId] = useState("");

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    };

    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    };

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    };

    const handleModelIdChange = (event) => {
        const value = event.target.value;
        setModelId(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = modelId;

        const automobilesUrl = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(automobilesUrl, fetchConfig);
        if (response.ok) {
            const newAutomobile = await response.json();

            setColor("");
            setYear("");
            setVin("");
            setModelId("");
        }
    };

    // JSX
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add an Automobile</h1>
                    <form onSubmit={handleSubmit} id="create-shoe-form">
                        <div className="form-floating mb-3">
                            <input
                                value={color}
                                onChange={handleColorChange}
                                placeholder="Color"
                                required
                                type="text"
                                name="color"
                                id="color"
                                className="form-control"
                            />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={year}
                                onChange={handleYearChange}
                                placeholder="Year"
                                required
                                type="text"
                                name="year"
                                id="year"
                                className="form-control"
                            />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={vin}
                                onChange={handleVinChange}
                                placeholder="Vin"
                                required
                                type="text"
                                name="vin"
                                id="vin"
                                className="form-control"
                            />
                            <label htmlFor="vin">Vin</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={modelId}
                                onChange={handleModelIdChange}
                                placeholder="Model ID"
                                required
                                type="text"
                                name="modelId"
                                id="modelId"
                                className="form-control"
                            />
                            <label htmlFor="modelId">Model ID</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
