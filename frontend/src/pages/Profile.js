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

  // Para cerrar el modal con escape o click fuera (opcional)
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
    <div>
      <h2>Perfil</h2>
      <div className="mb-3">
        <strong>Nombre:</strong> {profile.name}
      </div>
      <div className="mb-3">
        <strong>Dirección:</strong> {profile.address}
      </div>
      <div className="mb-3">
        <strong>Correo electrónico:</strong> {profile.email}
      </div>
      <div className="mb-3">
        <strong>Teléfono:</strong> {profile.phone}
      </div>
      <button className="btn btn-primary" onClick={handleEdit}>Modificar</button>

      {/* Modal Bootstrap */}
      {showModal && (
        <div
          className="modal show d-block"
          ref={modalRef}
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSave}>
                <div className="modal-header">
                  <h5 className="modal-title">Editar Perfil</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={handleCancel}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label>Nombre</label>
                    <input
                      className="form-control"
                      name="name"
                      value={editData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label>Dirección</label>
                    <input
                      className="form-control"
                      name="address"
                      value={editData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
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
                  <div className="mb-3">
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
                  <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
                  <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
