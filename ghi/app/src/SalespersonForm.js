import React, { useEffect, useState } from 'react';


function SalespersonForm() {

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

    const [employee, setEmployee] = useState('')
    const handleEmployeeChange = (event) => {
        const value = event.target.value;
        setEmployee(value)
    }

      const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.first_name = first;
        data.last_name = last;
        data.employee_id = employee
        console.log(data)

        const personUrl = "http://localhost:8090/api/salespeople/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
        }
      }
      const response = await fetch(personUrl, fetchConfig);
      if (response.ok) {
        const newPerson = await response.json();
        setFirst('');
        setLast('');
        setEmployee('');
      }
    }



    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Add a Salesperson</h1>
              <form onSubmit={handleSubmit} id="create-salesperson-form">
                <div className="form-floating mb-3">
                  <input value={first} onChange={handleFirstChange} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" />
                  <label htmlFor="name">First Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input value={last} onChange={handleLastChange} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                  <label htmlFor="fabric">Last Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input value={employee} onChange={handleEmployeeChange} placeholder="Employee Id" required type="number" name="employee_id" id="employee_id" className="form-control" />
                  <label htmlFor="color">Employee Id</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default SalespersonForm
