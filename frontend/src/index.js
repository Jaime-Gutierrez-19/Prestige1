import React from "react";
import ReactDOM from 'react-dom/client'; 
import "bootstrap/dist/css/bootstrap.min.css";  
import "./index.css";  
import App from "./App";
import ReactModal from "react-modal";
import { BrowserRouter } from 'react-router-dom';  
import { AuthProvider } from "./context/AuthContext";  // Importar el AuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactModal.setAppElement("#root");
root.render(
  <BrowserRouter>  {/* Asegúrate de envolver tu aplicación con BrowserRouter */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);