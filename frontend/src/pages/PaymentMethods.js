import React, { useState } from "react";

const PaymentMethods = () => {
  const [cards, setCards] = useState([
    { name: "Visa", last4: "1234" },
    { name: "Mastercard", last4: "5678" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setForm({ number: "", name: "", expiry: "", cvv: "" }); // limpia
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    if (
      form.number.length === 16 &&
      form.name &&
      form.expiry &&
      form.cvv.length === 3
    ) {
      setCards([
        ...cards,
        {
          name: form.name,
          last4: form.number.slice(-4),
          expiry: form.expiry,
          cvv: form.cvv,
        },
      ]);
      closeModal();
    } else {
      alert("Llena todos los campos correctamente");
    }
  };

  return (
    <div>
      <h2>Métodos de Pago</h2>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>
            {card.name} terminación {card.last4} {card.expiry ? `expira: ${card.expiry}` : ""}
          </li>
        ))}
      </ul>
      <button onClick={openModal}>Agregar tarjeta</button>

      {showModal && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, width: "100vw", height: "100vh",
          background: "rgba(0,0,0,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <div style={{
            background: "#fff", padding: "2rem", borderRadius: "8px", minWidth: "350px"
          }}>
            <h3>Nueva Tarjeta</h3>
            <form onSubmit={handleAddCard}>
              <input
                name="number"
                type="text"
                placeholder="Número de tarjeta (16 dígitos)"
                maxLength="16"
                value={form.number}
                onChange={handleChange}
                required
                pattern="[0-9]{16}"
              />
              <br />
              <input
                name="name"
                type="text"
                placeholder="A nombre de..."
                value={form.name}
                onChange={handleChange}
                required
              />
              <br />
              <input
                name="expiry"
                type="text"
                placeholder="MM/YY"
                maxLength="5"
                value={form.expiry}
                onChange={handleChange}
                required
              />
              <br />
              <input
                name="cvv"
                type="password"
                placeholder="CVV (3 dígitos)"
                maxLength="3"
                value={form.cvv}
                onChange={handleChange}
                required
                pattern="[0-9]{3}"
              />
              <br /><br />
              <button type="submit">Registrar tarjeta</button>
              <button type="button" onClick={closeModal} style={{ marginLeft: "1rem" }}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;
