import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link active" aria-current="page" to="/" >Home</NavLink></li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownService" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownService">
                <li><NavLink className="dropdown-item" to="/appointments/create">Create Appointment</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments">Service Appointments</NavLink></li>
                <li><NavLink className="dropdown-item" to="/service-history">Service History</NavLink></li>
              </ul>
            </li>
            <div className="dropdown-center">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSales" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownSales">
                <li><NavLink className="dropdown-item" to="saleslist">Sales</NavLink></li>
                <li><NavLink className="dropdown-item" to="salesform">Add a new sale</NavLink></li>
                <li><NavLink className="dropdown-item" to="saleshistory">Sales History</NavLink></li>
              </ul>
            </li>
            </div>
            <div>
            <div>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSales" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Salespeople
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownSales">
                <li><NavLink className="dropdown-item" to="salepersonlist">Salespeople</NavLink></li>
                <li><NavLink className="dropdown-item" to="salepersonform">Add a Salesperson</NavLink></li>
              </ul>
            </li>
            </div>
            </div>
            <div className="dropdown-center">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSales" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Customers
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownSales">
                <li><NavLink className="dropdown-item" to="customerlist">Customers</NavLink></li>
                <li><NavLink className="dropdown-item" to="customerform">Add a Customer</NavLink></li>
              </ul>
            </li>
            </div>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSales" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manufacturer
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownSales">
                <li><NavLink className="dropdown-item" to="manufacturerlist">Manufacturers</NavLink></li>
                <li><NavLink className="dropdown-item" to="manufacturerform">Create a Manufacturers</NavLink></li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSales" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Automobiles
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownSales">
                <li className="nav-item"><NavLink className="dropdown-item" to="/automobiles/create">Create an Automobile</NavLink></li>
                <li className="nav-item"><NavLink className="dropdown-item" to="/automobiles">Automobiles</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSales" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Vehicles
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownSales">
                <li className="nav-item"><NavLink className="dropdown-item" to="/models">Create a Vehicle Model</NavLink></li>
                <li><NavLink className="dropdown-item" to="vehiclelist">Vehicles</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSales" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Technicians
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownSales">
            <li className="nav-item"><NavLink className="dropdown-item" to="/technicians/add">Add Technician</NavLink></li>
            <li><NavLink className="dropdown-item" to="/technicians">Technicians</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
