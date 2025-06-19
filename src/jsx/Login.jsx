
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import '../css/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGuest = () => {
    // Placeholder: login as guest logic
    navigate('/under-dev');
  };

  const handleUser = () => {
    // Placeholder: login as user logic
    navigate('/user-home');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="••••••••"
        />
      </div>
      <div className="button-group">
        <button type="button" onClick={handleGuest}>
          Login as Guest
        </button>
        <button type="button" onClick={handleUser}>
          Login as User
        </button>
      </div>
    </div>
  );
}
