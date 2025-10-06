import React, { useState } from "react";

const Settings = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPassModal, setShowPassModal] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // Simula cambiar email
  const handleEmailSave = (e) => {
    e.preventDefault();
    if (newEmail && newEmail.includes("@")) {
      alert("Correo actualizado");
      setShowEmailModal(false);
      setNewEmail("");
    } else {
      alert("Correo inválido");
    }
  };

  // Simula cambiar contraseña
  const handlePassSave = (e) => {
    e.preventDefault();
    if (newPass === confirmPass && newPass) {
      alert("Contraseña actualizada");
      setShowPassModal(false);
      setCurrentPass("");
      setNewPass("");
      setConfirmPass("");
    } else {
      alert("Las contraseñas no coinciden.");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Configuración</h2>
      <div className="d-grid gap-2 col-md-6 mx-auto">
        <button className="btn btn-info" onClick={() => setShowEmailModal(true)}>
          Cambiar correo
        </button>
        <button className="btn btn-warning" onClick={() => setShowPassModal(true)}>
          Cambiar contraseña
        </button>
      </div>

      {/* Modal de cambiar correo */}
      {showEmailModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleEmailSave}>
                <div className="modal-header">
                  <h5 className="modal-title">Cambiar correo electrónico</h5>
                  <button type="button" className="btn-close" onClick={() => setShowEmailModal(false)} />
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label>Nuevo correo</label>
                    <input
                      className="form-control"
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      required
                      placeholder="Correo nuevo"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowEmailModal(false)}>
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-info">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal de cambiar contraseña */}
      {showPassModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handlePassSave}>
                <div className="modal-header">
                  <h5 className="modal-title">Cambiar contraseña</h5>
                  <button type="button" className="btn-close" onClick={() => setShowPassModal(false)} />
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label>Contraseña actual</label>
                    <input
                      className="form-control"
                      type="password"
                      value={currentPass}
                      onChange={(e) => setCurrentPass(e.target.value)}
                      required
                      placeholder="Actual"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Nueva contraseña</label>
                    <input
                      className="form-control"
                      type="password"
                      value={newPass}
                      onChange={(e) => setNewPass(e.target.value)}
                      required
                      placeholder="Nueva"
                    />
                  </div>
                  <div className="mb-3">
                    <label>Confirmar nueva contraseña</label>
                    <input
                      className="form-control"
                      type="password"
                      value={confirmPass}
                      onChange={(e) => setConfirmPass(e.target.value)}
                      required
                      placeholder="Confirmar nueva"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowPassModal(false)}>
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-warning">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
