// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import Wishlist from '../Wishlist';
import Orders from './Orders';
import HelpCentre from './HelpCenter';
import './ProfilePage.css';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar */}
        <div style={{ width: '30%', padding: '20px', backgroundColor: '#f4f4f4' }}>
          <h2>Account</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/profile">My Details</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/help">Help Centre</Link></li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={{ width: '70%', padding: '20px' }}>
          <Routes>
            <Route path="/profile" element={<ProfileDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/help" element={<HelpCentre />} />
          </Routes>
        </div>
      </div>
      </Router>
  );
}

export default App;
