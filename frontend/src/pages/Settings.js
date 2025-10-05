import React from "react";

const Settings = () => {
  const handleChangeEmail = () => {
    // Función para cambiar correo (simulada)
    alert("Correo actualizado");
  };

  const handleChangePassword = () => {
    // Función para cambiar contraseña (simulada)
    alert("Contraseña actualizada");
  };

  return (
    <div>
      <h2>Configuración</h2>
      <button onClick={handleChangeEmail}>Cambiar correo</button>
      <button onClick={handleChangePassword}>Cambiar contraseña</button>
    </div>
  );
};

export default Settings;
