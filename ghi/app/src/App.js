import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import { AddTechnicianForm } from "./AddTechnicianForm";
import { TechniciansList } from "./TechniciansList";
import { CreateAppointmentForm } from './CreateAppointmentForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technicians" element={<TechniciansList />} />
          <Route path="/technicians/add" element={<AddTechnicianForm />} />
          <Route path="/appointments/create" element={<CreateAppointmentForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
