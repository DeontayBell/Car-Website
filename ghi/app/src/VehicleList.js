import React, { useEffect, useState } from 'react';

function VehicleList() {

    const [vehicles, setVehicle] = useState([])
    const fetchData = async () => {
        const response = await fetch("http://localhost:8100/api/models/")
        if (response.ok) {
            const data = await response.json();
            setVehicle(data.models)
            console.log(setVehicle)
        }
    }

    useEffect(() => {
        fetchData();
      }, []);

    return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map(vehicle => {
              return (
                <tr key={vehicle.id}>
                  <td>{ vehicle.name }</td>
                  <td>{ vehicle.manufacturer.name }</td>
                  <td><img alt="" src={ vehicle.picture_url } /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
    )
}

export default VehicleList;
