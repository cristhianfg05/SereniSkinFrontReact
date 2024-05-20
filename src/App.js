import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; 
import WelcomePage from './components/WelcomePage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import MainPage from './components/MainPage';
import AccountPage from './components/AccountPage';
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Router>
            <CartProvider> 
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/main" element={<PrivateRoute><MainPage /></PrivateRoute>} />
                    <Route path="/account" element={<PrivateRoute><AccountPage /></PrivateRoute>} />
                    <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
                    <Route path="/product/:productId" element={<PrivateRoute><ProductDetailPage /></PrivateRoute>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </CartProvider>
        </Router>
    );
}

export default App;