import React, { useEffect, useState } from 'react';


function SalesForm() {

    const [vins, setVins] = useState([])
    const fetchData = async () => {
        const url = "http://localhost:8100/api/automobiles/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setVins(data.autos)
        }
    }

    const [salespeople, setSalespeople] = useState([])
    const fetchSalespeople = async () => {
        const saleurl = "http://localhost:8090/api/salespeople/";
        const response = await fetch(saleurl);
        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.salespeople)
        }
    }

    const [customers, setCustomers] = useState([])
    const fetchCustomers = async () => {
        const customerurl = "http://localhost:8090/api/customers/";
        const response = await fetch(customerurl);
        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers)
        }
    }

    const [vin, setVin] = useState('')
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value)
    }

    const [salesperson, setSalesperson] = useState('')
    const handleSalesChange = (event) => {
        const value = event.target.value;
        setSalesperson(value)
    }

    const [customer, setCustomer] = useState('')
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value)
    }

    const [price, setPrice] = useState('')
    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value)
    }


    useEffect(() => {
        fetchData();
        fetchSalespeople();
        fetchCustomers();
      }, []);

      const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.automobile = vin;
        data.salesperson = salesperson;
        data.customer = customer;
        data.price = price;
        console.log(data);

        const Urls = "http://localhost:8090/api/sales/"
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
        }
      }

        const soldAuto = async () => {
            const sold = {
                method: "PUT",
                body: JSON.stringify({"sold": true}),
            };
            const response = await fetch(`http://localhost:8100/api/automobiles/${vin}/`, sold);
            if (response.ok) {
                const data = await response.json();
            }
        }


      const response = await fetch(Urls, fetchConfig);
      if (response.ok) {
        const newSale = await response.json();
        console.log(newSale)
        await soldAuto()
        setVin('');
        setSalesperson('');
        setCustomer('');
        setPrice('');
      }
    }


    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Record a new sale</h1>
              <form onSubmit={handleSubmit} id="create-sales-form">
                <div className="mb-3">
                  <select value={vin} onChange={handleVinChange}  required name="Vin"  id="vin" className="form-control" >
                  <option value="vin">Choose a Vin</option>
                  {vins.filter(vin map(vin => {
                    return (
                        <option key={vin.vin} value={vin.vin}> {vin.vin}</option>
                    )
                  })}
                  </select>
                </div>

                <div className="mb-3">
                <select value={salesperson} onChange={handleSalesChange} placeholder="Salesperson" required type="text" name="salesperson" id="salesperson" className="form-control" >
                  <option value="salesperson">Choose a Salesperson</option>
                  {salespeople.map(sale => {
                    return (
                        <option key={sale.first_name} value={sale.first_name}> {`${sale.first_name} ${sale.last_name}`}</option>
                    )
                  })}
                  </select>
                </div>

                <div className="mb-3">
                <select value={customer} onChange={handleCustomerChange} placeholder="Customer" required type="text" name="customer" id="customer" className="form-control" >
                  <option value="">Choose a Customer</option>
                  {customers.map(customer => {
                    return (
                        <option key={customer.first_name} value={customer.first_name}> {`${customer.first_name} ${customer.last_name}`}</option>
                    )
                  })}
                  </select>
                </div>
                <div className="form-floating mb-3">
                  <input value={price} onChange={handlePriceChange} placeholder="Price" required type="text" name="price" id="price" className="form-control"/>
                  <label htmlFor="price">Price</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default SalesForm
