import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink to="/user-home" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/user-home/profile" className={({ isActive }) => isActive ? 'active' : ''}>
          Profile
        </NavLink>
        <NavLink to="/user-home/edit" className={({ isActive }) => isActive ? 'active' : ''}>
          Edit
        </NavLink>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}
