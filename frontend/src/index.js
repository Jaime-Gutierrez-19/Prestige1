import React from "react";
import ReactDOM from 'react-dom/client'; 
import "bootstrap/dist/css/bootstrap.min.css";  // Importa los estilos de Bootstrap
import "./index.css";  // Si tienes estilos adicionales propios
import App from "./App";

import { BrowserRouter } from 'react-router-dom';  // Asegúrate de importar BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  {/* Asegúrate de envolver tu aplicación con BrowserRouter */}
    <App />
  </BrowserRouter>
);