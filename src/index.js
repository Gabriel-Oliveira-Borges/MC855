import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import WelcomePage from './pages/inicio/WelcomePage';
import PacienteJaCadastrado from './pages/paciente-ja-cadastrado/PacienteJaCadastrado';
import NewPacientPage from './pages/pacienteNovo/NewPacientPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/novo" element={<NewPacientPage />} />
      <Route path="/cadastrado" element={<PacienteJaCadastrado/>} />
    </Routes>
  </BrowserRouter>
);
