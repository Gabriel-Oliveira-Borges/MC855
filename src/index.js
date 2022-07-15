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
import EditionPage from './pages/admin/editionPage/EditionPage';
import ProceduresPage from './pages/procedimentos/ProceduresPage';
import ServicesPage from './pages/atendimento/ServicesPage';
import SpecialtiesPage from './pages/especialidades/SpecialtiesPage';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import InicioAdminPage from './pages/admin/inicio/InicioAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/especialidades" element={<SpecialtiesPage />} />
      <Route path="/novo" element={<NewPatientPage />} />
      <Route path="/cadastrado" element={<OldPatientPage />} />
      <Route path="/procedimentos" element={<ProceduresPage />} />
      <Route path="/atendimento" element={<ServicesPage />} />
      <Route path="/consultas" element={<AppointmentsPage />} />
      <Route path="/agendada" element={<ScheduledAppointmentPage />} />
      <Route path="/encaixe" element={<SqueezeInPage />} />
      <Route path="/agendamento" element={<SchedulePage />} />
      <Route path="/admin/edit/:pageId" element={<EditionPage/>} />
      <Route path="/admin/inicio" element={<InicioAdminPage/>} />
    </Routes>
  </BrowserRouter>
);
