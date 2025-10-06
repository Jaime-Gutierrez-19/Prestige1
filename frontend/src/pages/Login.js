import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      setError("Credenciales incorrectas. Intenta de nuevo.");
    }
  };

  return (
    <div className="hero-page">
      <header className="hero-nav">
        <div className="brand">
          <img src="/royal.png" alt="Royal" />
        </div>
        <nav className="nav-icons">
          <button aria-label="user" className="icon-btn">👤</button>
          <button aria-label="search" className="icon-btn">🔍</button>
          <button aria-label="menu" className="icon-btn">☰</button>
        </nav>
      </header>

      <main className="hero-content">
        <section className="hero-left">
          <h1>
            <span>La mejor</span><br/>
            <span className="accent">experiencia</span>
          </h1>
          <p className="subcopy">
            Revisa tus estados de cuenta, realiza pagos y gestiona tus métodos
            de pago de forma segura y sencilla.
          </p>
          <button className="text-link" onClick={() => navigate("/contact")}>
            Contáctanos
          </button>
        </section>

        <section className="hero-right">
          <img className="truck" src="/truck.png" alt="truck" />

          {/* AQUÍ va exactamente tu recuadro de login */}
          <div className="login-card">
            <h5 style={{ fontWeight: 700, marginBottom: 16 }}>Iniciar sesión</h5>

            {error && <div className="login-error">{error}</div>}

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
        </section>
      </main>
    </div>
  );
};

export default Login;
