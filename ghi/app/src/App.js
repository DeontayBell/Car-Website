import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalepersonList from './SalespersonList';
import SalespersonForm from './SalespersonForm';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import SalesList from './SalesList';
import SalesForm from './SalesForm';
import ManufacturerList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import VehicleList from './VehicleList';
import { AddTechnicianForm } from "./AddTechnicianForm";
import { TechniciansList } from "./TechniciansList";
import { CreateAppointmentForm } from './CreateAppointmentForm';
import { AppointmentsList } from './AppointmentsList';
import { ServiceHistory } from './ServiceHistory';
import { CreateVehicleModelForm } from './CreateVehicleModelForm';
import { AutomobilesList } from "./AutomobilesList";
import { CreateAutomobileForm } from "./CreateAutomobileForm";
import SalesHistory from './SalespersonHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salepersonlist" element={<SalepersonList />} />
          <Route path="salepersonform" element={<SalespersonForm />} />
          <Route path="customerlist" element={<CustomerList />} />
          <Route path="customerform" element={<CustomerForm />} />
          <Route path="saleslist" element={<SalesList />} />
          <Route path="salesform" element={<SalesForm />} />
          <Route path="manufacturerlist" element={<ManufacturerList />} />
          <Route path="manufacturerform" element={<ManufacturerForm/>} />
          <Route path="vehiclelist" element={<VehicleList/>} />
          <Route path="/technicians" element={<TechniciansList />} />
          <Route path="/technicians/add" element={<AddTechnicianForm />} />
          <Route path="/appointments" element={<AppointmentsList />} />
          <Route path="/appointments/create" element={<CreateAppointmentForm />} />
          <Route path="/service-history" element={<ServiceHistory />} />
          <Route path="/models" element={<CreateVehicleModelForm />} />
          <Route path="/automobiles" element={<AutomobilesList />} />
          <Route path="/automobiles/create" element={<CreateAutomobileForm />} />
          <Route path="saleshistory" element={<SalesHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
