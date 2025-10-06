import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Dashboard } from './pages/Dashboard';  
import Statements from "./pages/Statements";
import PaymentHistory from "./pages/PaymentHistory";
import PaymentMethods from "./pages/PaymentMethods";
import Profile from "./pages/Profile";
import Contracts from "./pages/Contracts";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/"); 
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/dashboard"); 
  };

  if (!isAuthenticated) {
    
    return (
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={handleLogin} />} />
        <Route path="/register" element={<Register setIsAuthenticated={handleLogin} />} />
        <Route path="*" element={<Login setIsAuthenticated={handleLogin} />} />
      </Routes>
    );
  }

  
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <Routes>
            <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
            <Route path="/statements" element={<Statements />} />
            <Route path="/payment-history" element={<PaymentHistory />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Dashboard onLogout={handleLogout} />} />
            <Route path="*" element={<Dashboard onLogout={handleLogout} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
