import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './jsx/Login';
import UnderDev from './jsx/UnderDev';
import UserHomeLayout from './jsx/UserHomeLayout';
import UserHome from './jsx/UserHome';
import Edit from './jsx/Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/under-dev" element={<UnderDev />} />

        <Route path="/user-home" element={<UserHomeLayout />}>
          <Route index element={<UserHome />} />
          <Route path="edit" element={<Edit />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
