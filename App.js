import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Menu } from './form/menu';
import { Register } from './form/registration';
import { Login } from './form/login';
import { Dashboard } from './form/dashboard';
function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
