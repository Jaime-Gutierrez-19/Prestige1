import React from "react";
import { FaFilePdf } from "react-icons/fa"; // Si tienes react-icons instalado

const Contracts = () => {
  const contracts = [
    { name: "Contrato 1", date: "2025-09-01" },
    { name: "Contrato 2", date: "2025-08-15" },
  ];

  return (
    <div className="contracts-container card">
      <h2 className="contracts-title">Contratos</h2>
      <ul className="contracts-list">
        {contracts.map((contract, index) => (
          <li className="contract-item" key={index}>
            <div>
              <div className="contract-name">{contract.name}</div>
              <div className="contract-date">
                <span>Fecha: </span>
                {contract.date}
              </div>
            </div>
            <button className="btn-pdf">
              <FaFilePdf style={{ marginRight: 6, fontSize: 18 }} />
              Ver/Descargar PDF
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contracts;
