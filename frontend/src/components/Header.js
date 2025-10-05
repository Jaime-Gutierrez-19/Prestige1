import React from "react";
import { useAuth } from "../context/AuthContext"; 

const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-dark text-white d-flex justify-content-between align-items-center p-3">
      <h1 className="h5 mb-0">Bienvenido, usuario</h1>
      <button className="btn btn-danger" onClick={logout}>Cerrar sesión</button>
    </header>
  );
};

export default Header;
