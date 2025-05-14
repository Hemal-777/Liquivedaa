import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
import Banner from '../../Banner';
import Admin from './pages/Admin';



function App() {

  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null; // Check if token exists
  };

  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
      <Route path="/login" element={isAuthenticated() ? <Navigate to="/profile-details" /> : <Login />} />
        <Route path="/profile-details" element={isAuthenticated() ? <ProfileDetails /> : <Navigate to="/login" />} />
        <Route path="/cart" element={isAuthenticated() ? <Cart /> : <Navigate to="/login" />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        <Route path='/banner' element={<PrivateRoute element={<Banner />} />} />
      </Routes>
    </div>
  );
}

export default App;
