import React from "react";
import Card from "../components/Card";
import Table from "../components/Table";

export const Dashboard = () => {
  const dummyData = {
    balance: "$4,500.00",
    paymentsDue: "$300.00",
    notifications: [
      "Pago pendiente de $300 para el 15 de octubre.",
      "Nuevo contrato disponible para firmar.",
    ],
  };

  return (
    <div className="row g-4">
      <div className="col-md-4">
        <Card title="Saldo disponible" value={dummyData.balance} />
      </div>
      <div className="col-md-4">
        <Card title="Pagos próximos" value={dummyData.paymentsDue} />
      </div>
      <div className="col-md-4">
        <h2 className="h5">Notificaciones</h2>
        <ul className="list-group">
          {dummyData.notifications.map((notification, index) => (
            <li key={index} className="list-group-item">
              {notification}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


