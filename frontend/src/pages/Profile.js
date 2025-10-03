import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Juan Pérez",
    address: "Calle Ficticia 123, Ciudad, País",
    email: "juan@royalprestige.com",
    phone: "123456789",
  });

  const handleEdit = () => {
    // Función de edición (puedes cambiar los datos de ejemplo)
    setProfile({
      ...profile,
      name: "Nuevo Nombre",
    });
  };

  return (
    <div>
      <h2>Perfil</h2>
      <p>Nombre: {profile.name}</p>
      <p>Dirección: {profile.address}</p>
      <p>Correo electrónico: {profile.email}</p>
      <p>Teléfono: {profile.phone}</p>
      <button onClick={handleEdit}>Editar</button>
    </div>
  );
};

export default Profile;
