import React from 'react';
import { Home } from './components/index'
import Expenses from './components/teste';
import { Route, Routes } from 'react-router-dom';
import {RequireAuth} from './components/auth/RequireAuth';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/teste' element={
        <RequireAuth>
          <Expenses />
        </RequireAuth>
      }
      />
    </Routes>

  );
}

export default App;

//<div style={{ fontFamily: 'Lato, sans-serif' }}>