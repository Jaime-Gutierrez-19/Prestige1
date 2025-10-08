import React from "react";

const statusColor = {
  Completado: "#31ca54",
  Pendiente: "#ed818b",
};

const PaymentHistory = () => {
  const payments = [
    { date: "2025-09-01", amount: "$500.00", method: "Tarjeta de crédito", status: "Completado" },
    { date: "2025-08-15", amount: "$300.00", method: "Transferencia bancaria", status: "Pendiente" },
  ];

  return (
    <div className="payment-history-container card">
      <h2 className="payment-history-title">Historial de Pagos</h2>
      <table className="payments-table">
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
              <td>
                <span
                  className="status-label"
                  style={{
                    background: statusColor[payment.status],
                  }}
                >
                  {payment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
