import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import { AddTechnicianForm } from "./AddTechnicianForm";
import { TechniciansList } from "./TechniciansList";
import { CreateAppointmentForm } from './CreateAppointmentForm';
import { AppointmentsList } from './AppointmentsList';
import { ServiceHistory } from './ServiceHistory';
import { CreateVehicleModelForm } from './CreateVehicleModelForm';
import { AutomobilesList } from "./AutomobilesList";
import { CreateAutomobileForm } from "./CreateAutomobileForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technicians" element={<TechniciansList />} />
          <Route path="/technicians/add" element={<AddTechnicianForm />} />
          <Route path="/appointments" element={<AppointmentsList />} />
          <Route path="/appointments/create" element={<CreateAppointmentForm />} />
          <Route path="/service-history" element={<ServiceHistory />} />
          <Route path="/models" element={<CreateVehicleModelForm />} />
          <Route path="/automobiles" element={<AutomobilesList />} />
          <Route path="/automobiles/create" element={<CreateAutomobileForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
