import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white d-flex justify-content-between align-items-center p-3">
      <h1 className="h5 mb-0">Bienvenido, Usuario</h1>
      <button className="btn btn-danger">Cerrar sesión</button>
    </header>
  );
};

export default Header;
