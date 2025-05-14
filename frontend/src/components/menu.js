import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu" >
      <Link to="/signup" className="dropdown-item">Sign Up</Link>
      <Link to="/login" className="dropdown-item">Login</Link>
      <Link to="/profile-details" className="dropdown-item">Your Profile</Link>
      <Link to="/cart" className="dropdown-item">Cart</Link>
      <Link to="/wishlist" className="dropdown-item">Wishlist</Link>
    </div>
  );
};

export default DropdownMenu;
