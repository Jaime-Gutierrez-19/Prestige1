import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
     
        <div className="login-logo">
          
          <img src="/royal.png" alt="Royal Prestige" style={{width:"200px"}} />
        </div>
        <div className="login-info">
          <h2>La aplicación que te conecta con Royal Prestige</h2>
          <ul>
            <li>Revisa tus estados de cuenta y controla mejor tu cuenta</li>
            <li>Paga tus servicios y haz compras seguras</li>
            <li>Realiza pagos y consulta tus beneficios</li>
            <li>Consulta la información de tu cuenta y pagos</li>
            <li>Administra tus métodos de pago</li>
          </ul>
          <button className="btn btn-outline-light btn-lg mt-3">Conoce más</button>
        </div>
      </div>
      <div className="login-right">
        <div className="login-card">
          <h5 style={{ fontWeight: 700, marginBottom: 16 }}>Iniciar sesión</h5>
          <form onSubmit={handleLogin}>
            <div className="form-floating mb-2">
              <input
                className="form-control"
                type="email"
                id="inputEmail"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="inputEmail">Correo electrónico</label>
            </div>
            <div className="form-floating mb-2">
              <input
                className="form-control"
                type="password"
                id="inputPass"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="inputPass">Contraseña</label>
            </div>
            <button type="submit" className="btn login-btn w-100">
              Ingresar
            </button>
          </form>
          <div className="login-links mt-3">
            <button
              type="button"
              className="btn btn-link"
              onClick={() => navigate("/forgot-password")}
              style={{ padding: 0, color: "#ed818b", fontWeight: 500 }}
            >
              Recuperar contraseña
            </button>
            <br />
            <button
              type="button"
              className="btn btn-link"
              onClick={() => navigate("/forgot-username")}
              style={{ padding: 0, color: "#ed818b", fontWeight: 500 }}
            >
              ¿Olvidaste tu usuario?
            </button>
          </div>
          <div className="mt-3 text-center">
            <span>¿No tienes cuenta? </span>
            <span
              className="register-link"
              onClick={() => navigate("/register")}
              style={{ color: "#ed818b", textDecoration: "underline", cursor: "pointer", fontWeight: 600 }}
            >
              Regístrate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
