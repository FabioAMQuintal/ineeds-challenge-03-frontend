import React from 'react';
import { Home, RequireAuth, Main, Appointment, Patient, Search } from './components/index'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/main' element={
        <RequireAuth>
          <Main />
        </RequireAuth>
      }>
        <Route path="consultas" element={<Appointment />} />
        <Route path="pacientes" element={<Patient />} />
        <Route path="buscar" element={<Search />} />

      </Route>
    </Routes>

  );
}

export default App;

//<div style={{ fontFamily: 'Lato, sans-serif' }}>