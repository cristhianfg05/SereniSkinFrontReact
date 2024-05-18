import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import MainPage from './components/MainPage';
import AccountPage from './components/AccountPage';
import ProductDetailPage from './components/ProductDetailPage'; 
import CartPage from './components/CartPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/product/:productId" element={<ProductDetailPage />} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
  );
}

export default App;
