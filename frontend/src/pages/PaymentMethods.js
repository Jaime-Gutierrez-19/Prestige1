import React, { useState } from "react";

const PaymentMethods = () => {
  const [cards, setCards] = useState([
    { name: "Visa", last4: "1234" },
    { name: "Mastercard", last4: "5678" },
  ]);

  const handleAddCard = () => {
    const newCard = { name: "Amex", last4: "9876" };  // Agregar tarjeta simulada
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <h2>Métodos de Pago</h2>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>
            {card.name} ending in {card.last4}
          </li>
        ))}
      </ul>
      <button onClick={handleAddCard}>Agregar tarjeta</button>
    </div>
  );
};

export default PaymentMethods;
