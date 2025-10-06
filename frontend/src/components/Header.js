import React from "react";
import "./Header.css"; // No olvides crear este archivo

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="header-welcome">Bienvenido, usuario</span>
      </div>
      <div className="header-right">
        <button className="btn-header" onClick={onLogout}>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};

export default Header;
