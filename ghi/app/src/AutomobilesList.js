import React, { useEffect, useState } from "react";

export const AutomobilesList = () => {
    const [automobiles, setAutomobiles] = useState([]);

    useEffect(() => {
        const fetchAutomobiles = async () => {
            const response = await fetch("http://localhost:8100/api/automobiles/");
            const data = await response.json();
            setAutomobiles(data.autos);
        };

        fetchAutomobiles();
    }, []);

    return (
        <div>
            <h1>Automobiles</h1>
            {automobiles.map(auto => (
                <div key={auto.vin}>
                    <h2>{auto.model.name} ({auto.year})</h2>
                    <img src={auto.model.picture_url} alt={auto.model.name} />
                    <p>Vin: {auto.vin}</p>
                    <p>Color: {auto.color}</p>
                    <p>Sold: {auto.sold ? "Yes" : "No"}</p>
                </div>
            ))}
        </div>
    );
};
