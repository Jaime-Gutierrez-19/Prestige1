import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Si los datos son válidos, recibirás un correo para restablecer tu contraseña.");
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#b0b0b0" }}>
        ¿Olvidó su contraseña?
      </h2>
      <div className="row justify-content-center">
        <div className="col-sm-8 border rounded p-4 m-2">
          <p>
            Ingresa tu correo electrónico y número de cliente registrado. Si los datos son correctos, recibirás las instrucciones para restablecer tu contraseña.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Correo electrónico</label>
              <input
                className="form-control"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
              />
            </div>
            <div className="mb-3">
              <label>Número de cliente</label>
              <input
                className="form-control"
                type="text"
                required
                value={clientNumber}
                onChange={(e) => setClientNumber(e.target.value)}
                placeholder="Número de cliente"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Recuperar contraseña
            </button>
          </form>
          {message && (
            <div className="alert alert-info text-center mt-3">{message}</div>
          )}
          <div className="mt-3 text-center">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
              Volver al inicio de sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
