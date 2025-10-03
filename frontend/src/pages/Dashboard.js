import React from "react";
import Card from "../components/Card";
import Table from "../components/Table";

export const Dashboard = ({ onLogout }) => {
  const dummyData = {
    balance: "$4,500.00",
    paymentsDue: "$300.00",
    notifications: [
      "Pago pendiente de $300 para el 15 de octubre.",
      "Nuevo contrato disponible para firmar.",
    ],
  };

  return (
     <div className="dashboard">
      <h2>Bienvenido a tu Dashboard</h2>
      <div className="row">
        <div className="col">
          <Card title="Saldo disponible" value={dummyData.balance} />
        </div>
        <div className="col">
          <Card title="Pagos próximos" value={dummyData.paymentsDue} />
        </div>
      </div>
      <div className="notifications">
        <h3>Notificaciones</h3>
        <ul>
          {dummyData.notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
        <button onClick={onLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
};


