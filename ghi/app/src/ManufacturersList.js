import React, { useEffect, useState } from 'react';

function ManufacturerList() {

    const [manufacturer, setManufactuer] = useState([])
    const fetchData = async () => {
        const response = await fetch("http://localhost:8100/api/manufacturers/")
        if (response.ok) {
            const data = await response.json();
            setManufactuer(data.manufacturers)
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
            </tr>
          </thead>
          <tbody>
            {manufacturer.map(man => {
              return (
                <tr key={man.id}>
                  <td>{ man.name }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )
}

export default ManufacturerList;
