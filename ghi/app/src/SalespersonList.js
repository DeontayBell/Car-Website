import React, { useEffect, useState } from 'react';

function SalepersonList() {

    const [salespeople, setSalesPeople] = useState([])
    const fetchData = async () => {
        const response = await fetch("http://localhost:8090/api/salespeople/")
        if (response.ok) {
            const data = await response.json();
            setSalesPeople(data.salespeople)
            console.log(setSalesPeople)
        }
    }

    useEffect(() => {
        fetchData();
      }, []);

    return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Employee Id</th>
            </tr>
          </thead>
          <tbody>
            {salespeople.map(salesperson => {
              return (
                <tr key={salesperson.id}>
                  <td>{ salesperson.first_name }</td>
                  <td>{ salesperson.last_name }</td>
                  <td>{ salesperson.employee_id }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    )
}

export default SalepersonList;
