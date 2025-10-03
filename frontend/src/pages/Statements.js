import React, { useState } from "react";
import Modal from "react-modal";

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
    <div>
      <h2>Estados de Cuenta</h2>
      <table className="table">
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
                <button onClick={() => openModal(statement)}>Ver</button>
                <a href="#">Descargar PDF</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Vista previa del estado de cuenta</h2>
        <p>Fecha: {selectedStatement?.date}</p>
        <p>Monto: {selectedStatement?.amount}</p>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default Statements;
