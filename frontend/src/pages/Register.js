import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setIsAuthenticated }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [reference, setReference] = useState("");
  const [rfc, setRfc] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && clientNumber && reference && rfc && password) {
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#b0b0b0" }}>
        Registro de Nuevos Usuarios
      </h2>
      <div className="row justify-content-center">
        <div className="col-sm-8 border rounded p-4 m-2">
          <p>
            El registro en línea es rápido y seguro. Todo lo que necesita es su número de cliente y un número de referencia válido. Tendrá que ingresar su dirección de correo electrónico y los 4 últimos dígitos de su número de seguro social (RFC en México).
          </p>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label>Nombre completo</label>
              <input
                className="form-control"
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Correo electrónico</label>
              <input
                className="form-control"
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Número de cliente</label>
              <input
                className="form-control"
                type="text"
                placeholder="Número de cliente"
                value={clientNumber}
                onChange={(e) => setClientNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Número de referencia</label>
              <input
                className="form-control"
                type="text"
                placeholder="Referencia"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>RFC (4 últimos dígitos)</label>
              <input
                className="form-control"
                type="text"
                maxLength={4}
                placeholder="RFC"
                value={rfc}
                onChange={(e) => setRfc(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Contraseña</label>
              <input
                className="form-control"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-secondary w-100">
              Registrar
            </button>
          </form>
          <div className="mt-3 text-center">
            ¿Ya tienes cuenta?{" "}
            <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
              Inicia sesión aquí
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
