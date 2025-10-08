import React, { useState } from "react";

const Statements = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedStatement, setSelectedStatement] = useState(null);

  const statements = [
    { date: "2025-09-01", amount: "$500.00" },
    { date: "2025-08-15", amount: "$300.00" },
  ];

  const openModal = (statement) => {
    setSelectedStatement(statement);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="statements-container card">
      <h2 className="statements-title">Estados de Cuenta</h2>
      <table className="statements-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {statements.map((statement, index) => (
            <tr key={index}>
              <td>{statement.date}</td>
              <td>{statement.amount}</td>
              <td>
                <button className="btn-secondary" onClick={() => openModal(statement)}>
                  Ver
                </button>
                <a
                  className="btn-pdf-link"
                  href="#"
                  style={{ marginLeft: 10 }}
                  download
                  title="Descargar PDF"
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" style={{ marginRight: 3, verticalAlign: '-3px' }}><path fill="#ed818b" d="M3 2.5A1.5 1.5 0 0 1 4.5 1h6a1 1 0 0 1 .7.29l4.5 4.5A1 1 0 0 1 16 6.5v11A1.5 1.5 0 0 1 14.5 19h-10A1.5 1.5 0 0 1 3 17.5v-15ZM9 2v4a1 1 0 0 0 1 1h4l-5-5Z"/></svg>
                  PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalIsOpen && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: 400 }}>
            <h3 className="modal-title">Vista previa del estado de cuenta</h3>
            <div className="modal-body">
              <p><strong>Fecha:</strong> {selectedStatement?.date}</p>
              <p><strong>Monto:</strong> {selectedStatement?.amount}</p>
            </div>
            <div className="modal-footer">
              <button className="btn-primary" onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statements;
