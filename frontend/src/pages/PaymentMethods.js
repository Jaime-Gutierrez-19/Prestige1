import React, { useState } from "react";

const PaymentMethods = () => {
  const [cards, setCards] = useState([
    { name: "Visa", last4: "1234", expiry: "12/27" },
    { name: "Mastercard", last4: "5678", expiry: "10/26" },
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
    setForm({ number: "", name: "", expiry: "", cvv: "" });
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
    <div className="payment-card-container card">
      <h2 className="payment-title">Métodos de Pago</h2>
      <ul className="card-list">
        {cards.map((card, index) => (
          <li key={index} className="card-item">
            <div className="card-icon">
              {card.name === "Visa" && (
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
              )}
              {card.name === "Mastercard" && (
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MC" />
              )}
            </div>
            <div className="card-details">
              <div className="card-name">{card.name}</div>
              <div className="card-number">•••• {card.last4}</div>
              <div className="card-expiry">
                Expira: {card.expiry}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn-primary" onClick={openModal}>Agregar tarjeta</button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Nueva Tarjeta</h3>
            <form onSubmit={handleAddCard}>
              <div className="form-group">
                <label>Número de tarjeta</label>
                <input
                  name="number"
                  type="text"
                  placeholder="16 dígitos"
                  maxLength="16"
                  value={form.number}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{16}"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Nombre en la tarjeta</label>
                <input
                  name="name"
                  type="text"
                  placeholder="A nombre de..."
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expira</label>
                  <input
                    name="expiry"
                    type="text"
                    placeholder="MM/YY"
                    maxLength="5"
                    value={form.expiry}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    name="cvv"
                    type="password"
                    placeholder="CVV (3 dígitos)"
                    maxLength="3"
                    value={form.cvv}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{3}"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn-primary">Registrar tarjeta</button>
                <button type="button" className="btn-secondary" onClick={closeModal}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;
