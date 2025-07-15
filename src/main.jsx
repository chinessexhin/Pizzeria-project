import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { CartProvider } from './components/Context/CartContext.jsx';
import { UserProvider } from './components/Context/UserContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

