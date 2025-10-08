import React, { useState, useRef, useEffect } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Juan Pérez",
    address: "Calle Ficticia 123, Ciudad, País",
    email: "juan@royalprestige.com",
    phone: "123456789",
  });

  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(profile);
  const modalRef = useRef();

  useEffect(() => {
    const handleEsc = (e) => (e.key === 'Escape' ? setShowModal(false) : null);
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

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
    <div className="profile-container">
      <div className="card">
        <h2 className="profile-title">Perfil de Usuario</h2>
        
        <div className="profile-info">
          <div className="profile-field">
            <strong>Nombre:</strong> 
            <span>{profile.name}</span>
          </div>
          <div className="profile-field">
            <strong>Dirección:</strong> 
            <span>{profile.address}</span>
          </div>
          <div className="profile-field">
            <strong>Correo electrónico:</strong> 
            <span>{profile.email}</span>
          </div>
          <div className="profile-field">
            <strong>Teléfono:</strong> 
            <span>{profile.phone}</span>
          </div>
        </div>
        
        <button className="btn-primary" onClick={handleEdit}>
          Modificar Perfil
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCancel}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSave}>
              <div className="modal-header">
                <h3>Editar Perfil</h3>
                <button type="button" className="btn-close" onClick={handleCancel}>×</button>
              </div>
              
              <div className="modal-body">
                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    className="form-control"
                    name="name"
                    value={editData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Dirección</label>
                  <input
                    className="form-control"
                    name="address"
                    value={editData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Correo electrónico</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Teléfono</label>
                  <input
                    className="form-control"
                    name="phone"
                    value={editData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={handleCancel}>
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
