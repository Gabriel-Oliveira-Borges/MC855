import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import WelcomePage from './pages/inicio/WelcomePage';
import NewPacientPage from './pages/pacienteNovo/NewPacientPage';
import OldPatientPage from './pages/pacienteCadastrado/OldPatientPage';
import AppointmentsPage from './pages/consultas/AppointmentsPage';
import ScheduledAppointmentPage from './pages/consultaAgendada/ScheduledAppointmentPage';
import SqueezeInPage from './pages/encaixeEmail/SqueezeInPage';
import SchedulePage from './pages/agendamentoNaHora/SchedulePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/novo" element={<NewPacientPage />} />
      <Route path="/cadastrado" element={<OldPatientPage />} />
      <Route path="/consultas" element={<AppointmentsPage />} />
      <Route path="/agendada" element={<ScheduledAppointmentPage />} />
      <Route path="/encaixe" element={<SqueezeInPage />} />
      <Route path="/agendamento" element={<SchedulePage />} />
    </Routes>
  </BrowserRouter>
);
