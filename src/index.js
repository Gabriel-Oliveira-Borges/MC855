import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import WelcomePage from './pages/inicio/WelcomePage';
import NewPacientPage from './pages/pacienteNovo/NewPacientPage';
import OldPatientPage from './pages/pacienteCadastrado/OldPatientPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/novo" element={<NewPacientPage />} />
      <Route path="/cadastrado" element={<OldPatientPage />} />
    </Routes>
  </BrowserRouter>
);
