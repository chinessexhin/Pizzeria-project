import { Routes, Route as RouterRoute } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';      
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <RouterRoute path="/" element={<Home />} />

        <RouterRoute
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <RouterRoute
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <RouterRoute
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <RouterRoute path="/cart" element={<Cart />} />
        <RouterRoute path="/pizza" element={<Pizza />} />
        <RouterRoute path="/pizza/p001" element={<Pizza />} />
        <RouterRoute path="/pizza/:id" element={<Pizza />} />
        <RouterRoute path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

