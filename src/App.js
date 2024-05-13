import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
  );
}

export default App;
