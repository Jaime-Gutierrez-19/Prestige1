import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#b0b0b0" }}>
        ACCESO A LA CUENTA DEL CLIENTE
      </h2>
      <div className="mb-4">
        <p>
          Bienvenido al portal de Servicio al Cliente de Hy Cite. Aquí usted puede ver sus estados de cuenta electrónicos, hacer sus pagos, administrar su cuenta y más.
        </p>
        <p>
          <b>Estados de Cuenta Electrónicos (Sin Papel):</b> Reciba cada mes un correo electrónico recordatorio, dejándole saber cuándo está disponible su nuevo estado de cuenta. Acceso a más de 12 meses de estados de cuenta electrónicos en un formato fácil de ver. El sistema electrónico implica menos malistas y menos consumo de papel. ¡Además es una gran manera de conservar el ecosistema!
        </p>
        <p>
          <b>Pagos en Línea:</b> Ahorre tiempo, cheques y gastos de envío, haciendo sus pagos a través de nuestra segura página Web. Programa pagos automáticos y despreocúpese.
        </p>
        <p>
          <b>Administración de Cuentas:</b> Vea su orden e historial de pago, haga seguimiento a la entrega de sus pedidos, y reciba notificaciones de nuevos productos y ofertas especiales.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6 border rounded p-4 m-2">
          <h5 className="mb-4">Usuarios Registrados: Iniciar Sesión</h5>
          <form onSubmit={handleLogin}>
            <input
              className="form-control mb-2"
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="form-control mb-3"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary w-100">
              Iniciar sesión
            </button>
          </form>
          <div className="mt-3">
            <button
        type="button"
        className="btn btn-link"
        onClick={() => navigate("/forgot-password")}
        style={{ padding: 0 }}
      >
        ¿Olvidó su contraseña?
      </button>
            <br />
             <button
        type="button"
        className="btn btn-link"
        onClick={() => navigate("/forgot-password")}
        style={{ padding: 0 }}
      >
        ¿Olvidó su identificación de usuario?
      </button>
            
          </div>
        </div>
        <div className="col-sm-5 border rounded p-4 m-2">
          <h5>Registro de Nuevos Usuarios:</h5>
          <p>
            El registro en línea es rápido y seguro. Todo lo que necesita es su número de cliente y un número de referencia válido. Tendrá que ingresar su dirección de correo electrónico y los 4 últimos dígitos de su número de seguro social (RFC en México).
          </p>
          <button
            className="btn btn-secondary w-100"
            onClick={() => navigate("/register")}
          >
            Registro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
