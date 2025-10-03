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

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Estado de autenticación
  const navigate = useNavigate();

  // Función de logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/"); // Redirige al Login
  };

  // Función de login (esto simula la autenticación)
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/dashboard");  // Redirige al Dashboard
  };

  return (
    <div className="d-flex h-100">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <div className="container-fluid p-4">
          <Routes>
            {/* Si el usuario no está autenticado, redirige al Login */}
            <Route path="/" element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Login setIsAuthenticated={handleLogin} />} />
            
            {/* Registro, si ya está autenticado redirige al Dashboard */}
            <Route path="/register" element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Register setIsAuthenticated={handleLogin} />} />
            
            {/* Dashboard está protegido */}
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Login setIsAuthenticated={handleLogin} />} />
            
            {/* Otras rutas */}
            <Route path="/statements" element={<Statements />} />
            <Route path="/payment-history" element={<PaymentHistory />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
