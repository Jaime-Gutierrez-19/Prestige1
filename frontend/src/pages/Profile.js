import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Juan Pérez",
    address: "Calle Ficticia 123, Ciudad, País",
    email: "juan@royalprestige.com",
    phone: "123456789",
  });

  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(profile);

  const handleEdit = () => {
    setEditData(profile);      
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile(editData);
    setShowModal(false);
  };

  const handleCancel = () => setShowModal(false);

  return (
    <div>
      <h2>Perfil</h2>
      <p>Nombre: {profile.name}</p>
      <p>Dirección: {profile.address}</p>
      <p>Correo electrónico: {profile.email}</p>
      <p>Teléfono: {profile.phone}</p>
      <button onClick={handleEdit}>Modificar</button>

      {showModal && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, width: "100vw", height: "100vh",
          background: "rgba(0,0,0,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "#fff", padding: "2rem", borderRadius: "8px", minWidth: "350px"
          }}>
            <h3>Editar Perfil</h3>
            <form onSubmit={handleSave}>
              <input
                name="name"
                type="text"
                value={editData.name}
                onChange={handleChange}
                placeholder="Nombre"
                required
              /><br />
              <input
                name="address"
                type="text"
                value={editData.address}
                onChange={handleChange}
                placeholder="Dirección"
                required
              /><br />
              <input
                name="email"
                type="email"
                value={editData.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                required
              /><br />
              <input
                name="phone"
                type="text"
                value={editData.phone}
                onChange={handleChange}
                placeholder="Teléfono"
                required
              /><br /><br />
              <button type="submit" className="btn btn-primary">Guardar</button>
              <button type="button" className="btn btn-secondary" onClick={handleCancel} style={{ marginLeft: '1rem' }}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
