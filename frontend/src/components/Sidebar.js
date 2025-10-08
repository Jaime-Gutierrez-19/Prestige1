import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Sidebar.css'; 

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className="sidebar-logo mb-4">
        
        <img src="/logoRoyal.png" alt="Royal Prestige" style={{width: '75px'}}/> 
        <h2 className="sidebar-title">Royal<br/>Prestige</h2>
      </div>
      <nav>
        <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>Dashboard</Link>
        <Link to="/statements" className={location.pathname === "/statements" ? "active" : ""}>Estados de cuenta</Link>
        <Link to="/payment-history" className={location.pathname === "/payment-history" ? "active" : ""}>Historial de pagos</Link>
        <Link to="/payment-methods" className={location.pathname === "/payment-methods" ? "active" : ""}>Métodos de pago</Link>
        <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>Perfil</Link>
        <Link to="/contracts" className={location.pathname === "/contracts" ? "active" : ""}>Contratos</Link>
        <Link to="/settings" className={location.pathname === "/settings" ? "active" : ""}>Configuración</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
