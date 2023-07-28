import React, { useEffect, useState } from 'react';


function CustomerForm() {

    const [first, setFirst] = useState('')
    const handleFirstChange = (event) => {
        const value = event.target.value;
        setFirst(value)
    }

    const [last, setLast] = useState('')
    const handleLastChange = (event) => {
        const value = event.target.value;
        setLast(value)
    }

    const [address, setAddress] = useState('')
    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value)
    }

    const [number, setNumber] = useState('')
    const handleNumberChange = (event) => {
        const value = event.target.value;
        setNumber(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.first_name = first;
        data.last_name = last;
        data.address = address;
        data.phone_number = number
        console.log(data)

        const personUrl = "http://localhost:8090/api/customers/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
        }
      }
      const response = await fetch(personUrl, fetchConfig);
      if (response.ok) {
        const newCustomer = await response.json();
        setFirst('');
        setLast('');
        setAddress('');
        setNumber('');
      }
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a Customer</h1>
            <form onSubmit={handleSubmit} id="create-customer-form">
              <div className="form-floating mb-3">
                <input value={first} onChange={handleFirstChange} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" />
                <label htmlFor="first">First Name</label>
              </div>

              <div className="form-floating mb-3">
                <input value={last} onChange={handleLastChange} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                <label htmlFor="last">Last Name</label>
              </div>

              <div className="form-floating mb-3">
                <input value={address} onChange={handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                <label htmlFor="address">Address</label>
              </div>
              <div className="form-floating mb-3">
                <input value={number} onChange={handleNumberChange} placeholder="Number" required type="text" name="number" id="number" className="form-control" />
                <label htmlFor="number">Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default CustomerForm
