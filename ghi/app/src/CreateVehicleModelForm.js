import React, { useEffect, useState } from "react";

export const CreateVehicleModelForm = () => {
    // Form Data
    const [modelName, setModelName] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [manufacturerId, setManufacturerId] = useState("");

    // Handlers: onChange (helper functions)
    const handleModelNameChange = (event) => {
        const value = event.target.value;
        setModelName(value);
    };

    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value);
    };

    const handleManufacturerIdChange = (event) => {
        const value = event.target.value;
        setManufacturerId(value);
    };

    // Handler: onSubmit (helper function)
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.model_name = modelName;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturerId;

        const modelUrl = "http://localhost:8080/api/models/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            const newModel = await response.json();

            setModelName("");
            setPictureUrl("");
            setManufacturerId("");
        }
    };

    // JSX
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Vehicle Model</h1>
                    <form onSubmit={handleSubmit} id="create-model-form">
                        <div className="form-floating mb-3">
                            <input
                                value={modelName}
                                onChange={handleModelNameChange}
                                placeholder="Model Name"
                                required
                                type="text"
                                name="modelName"
                                id="modelName"
                                className="form-control"
                            />
                            <label htmlFor="modelName">Model Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={pictureUrl}
                                onChange={handlePictureUrlChange}
                                placeholder="Picture URL"
                                required
                                type="text"
                                name="pictureUrl"
                                id="pictureUrl"
                                className="form-control"
                            />
                            <label htmlFor="pictureUrl">Picture URL</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={manufacturerId}
                                onChange={handleManufacturerIdChange}
                                placeholder="Manufacturer ID"
                                required
                                type="text"
                                name="manufacturerId"
                                id="manufacturerId"
                                className="form-control"
                            />
                            <label htmlFor="manufacturerId">Manufacturer ID</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
