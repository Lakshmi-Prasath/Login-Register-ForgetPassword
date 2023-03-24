import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbarr from './components/Navbarr';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Forgetpassword from './pages/Forgetpassword';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        {/* <Navbarr /> */}
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/forgetpassword' element={<Forgetpassword />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
