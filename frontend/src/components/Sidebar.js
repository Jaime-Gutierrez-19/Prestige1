import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-md-3 col-lg-2 bg-dark text-white p-4">
      <h2 className="mb-4">FinApp</h2>
      <ul className="list-unstyled">
        <li>
          <Link to="/dashboard" className="text-white d-block py-2">Dashboard</Link>
        </li>
        <li>
          <Link to="/statements" className="text-white d-block py-2">Estados de cuenta</Link>
        </li>
        <li>
          <Link to="/payment-history" className="text-white d-block py-2">Historial de pagos</Link>
        </li>
        <li>
          <Link to="/payment-methods" className="text-white d-block py-2">Métodos de pago</Link>
        </li>
        <li>
          <Link to="/profile" className="text-white d-block py-2">Perfil</Link>
        </li>
        <li>
          <Link to="/contracts" className="text-white d-block py-2">Contratos</Link>
        </li>
        <li>
          <Link to="/settings" className="text-white d-block py-2">Configuración</Link>
        </li>
        <li>
          <Link to="/login" className="text-white d-block py-2">Login</Link>
        </li>
        <li>
          <Link to="/register" className="text-white d-block py-2">Registrar</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
