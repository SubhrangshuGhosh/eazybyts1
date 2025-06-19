import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../css/UserHomeLayout.css';

export default function UserHomeLayout() {
  return (
    <div className="user-home-layout">
      <Navbar />
      <div className="user-home-content">
        <Outlet />
      </div>
    </div>
  );
}
