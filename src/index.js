import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/inicio/WelcomePage';
import OldPatientPage from './pages/pacienteCadastrado/OldPatientPage';
import AppointmentsPage from './pages/consultas/AppointmentsPage';
import ScheduledAppointmentPage from './pages/consultaAgendada/ScheduledAppointmentPage';
import SqueezeInPage from './pages/encaixeEmail/SqueezeInPage';
import SchedulePage from './pages/agendamentoNaHora/SchedulePage';
import NewPatientPage from './pages/pacienteNovo/NewPatientPage';
import SpecialtiesPage from './pages/especialidades/SpecialtiesPage';
import './index.css';
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/novo" element={<NewPatientPage />} />
      <Route path="/cadastrado" element={<OldPatientPage />} />
      <Route path="/consultas" element={<AppointmentsPage />} />
      <Route path="/agendada" element={<ScheduledAppointmentPage />} />
      <Route path="/encaixe" element={<SqueezeInPage />} />
      <Route path="/agendamento" element={<SchedulePage />} />
      <Route path="/especialidades" element={<SpecialtiesPage />} />
    </Routes>
  </BrowserRouter>
);
