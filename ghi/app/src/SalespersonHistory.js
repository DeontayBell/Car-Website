import React, { useEffect, useState } from 'react';

function SalesHistory() {

    const [sales, setSales] = useState([])
    const fetchData = async () => {
        const response = await fetch("http://localhost:8090/api/sales/")
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales)
            console.log(setSales)
        }
    }

    const [salesChange, setSalesChange] = useState('')
    const handleSalesChange = (event) => {
        const value = event.target.value
        setSalesChange(value)
    }

    useEffect(() => {
        fetchData();
      }, []);

    return (
        <><div className="row"></div>
        <h1>Salesperson History</h1><div className="mb-3">
            <select value={salesChange} onChange={handleSalesChange}  required name="Salesperson"  id="salesperson" className="form-control" >
            <option value="salesperson">Choose a Salesperson</option>
            {sales.map(sale => {
                    return (
                        <option key={sale.first_name} value={sale.first_name}> {`${sale.salesperson.first_name} ${sale.salesperson.last_name}`}</option>
                    )
                  })}
                  </select>
        </div><table className="table table-striped">
                <thead>
                    <tr>
                        <th>Salesperson</th>
                        <th>Customer</th>
                        <th>Vin</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td>{`${sale.salesperson.first_name} ${sale.salesperson.last_name}`}</td>
                                <td>{`${sale.customer.first_name} ${sale.customer.last_name}`}</td>
                                <td>{sale.automobile.vin}</td>
                                <td>{sale.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table></>
    )
}


export default SalesHistory;
