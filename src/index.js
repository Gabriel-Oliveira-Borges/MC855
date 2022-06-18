import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './pages/app/App';
import 'semantic-ui-css/semantic.min.css'
import WelcomePage from './pages/inicio/WelcomePage';
import PacienteNovo from './pages/pacientenovo/PacienteNovo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/inicio" element={<WelcomePage/>} />
      <Route path="/paciente-novo" element={<PacienteNovo/>} />
    </Routes>
  </BrowserRouter>
);
