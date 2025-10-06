import React from "react";
import "./Header.css";

const Header = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <h1 className="page-title">Bienvenido, usuario</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};

export default Header;
