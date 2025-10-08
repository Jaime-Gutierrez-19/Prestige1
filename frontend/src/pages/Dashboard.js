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
    <div className="dashboard-container">
      <h2 className="dashboard-title">Bienvenido a tu Dashboard</h2>
      <div className="dashboard-cards">
        <Card title="Saldo disponible" value={dummyData.balance} />
        <Card title="Pagos próximos" value={dummyData.paymentsDue} />
      </div>
      <div className="dashboard-notifications card">
        <h3>Notificaciones</h3>
        <ul>
          {dummyData.notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
        <button className="btn-primary" onClick={onLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
};

export default Dashboard;
