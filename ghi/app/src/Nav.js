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
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/technicians">Technicians</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/add">Add Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/create">Create Appointment</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="salepersonlist">Salespeople</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="salepersonform">Salesperson</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="customerlist">Customers</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="customerform">Customer</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="saleslist">Sales</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="salesform">Add a new sale</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="manufacturerlist">Manufacturers</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="manufacturerform">Create a Manufacturers</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="vehiclelist">Vehicles</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
