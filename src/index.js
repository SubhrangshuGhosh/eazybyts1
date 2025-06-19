import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ✅ Add this import
import { UserProvider } from './jsx/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap App with UserProvider */}
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
