import React from "react";

const PaymentHistory = () => {
  const payments = [
    { date: "2025-09-01", amount: "$500.00", method: "Tarjeta de crédito", status: "Completado" },
    { date: "2025-08-15", amount: "$300.00", method: "Transferencia bancaria", status: "Pendiente" },
  ];

  return (
    <div>
      <h2>Historial de Pagos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Método de pago</th>
            <th>Estatus</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.date}</td>
              <td>{payment.amount}</td>
              <td>{payment.method}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
