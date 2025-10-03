import React from "react";

const Contracts = () => {
  const contracts = [
    { name: "Contrato 1", date: "2025-09-01" },
    { name: "Contrato 2", date: "2025-08-15" },
  ];

  return (
    <div>
      <h2>Contratos</h2>
      <ul>
        {contracts.map((contract, index) => (
          <li key={index}>
            {contract.name} - {contract.date} 
            <button>Ver/Descargar PDF</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contracts;
