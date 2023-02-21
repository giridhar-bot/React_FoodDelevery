import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import "./CheckoutPage.css";

function CheckoutPage({ cartTotal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen}>
      <button className="closeButton" onClick={handleClose}>
        X
      </button>
      {isSubmitted ? (
        <div className="checkoutSuccess">
          <h2>Order Placed Successfully!</h2>
          <h1>Your Order Will Be Delivered Soon..............</h1>
          <p>Thank you for shopping with us.</p>
          <p>Your order total is ₹ {cartTotal}.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Enter Your Payment Details</h2>
          <div className="checkoutFormField">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="checkoutFormField">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="checkoutFormField">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            />
          </div>
          <div className="checkoutFormField">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(event) => setCardNumber(event.target.value)}
              maxLength={16}
              required
            />
          </div>
          <div className="checkoutFormField">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="month"
              id="expiryDate"
              value={expiryDate}
              onChange={(event) => setExpiryDate(event.target.value)}
              required
            />
          </div>
          <div className="checkoutFormField">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(event) => setCvv(event.target.value)}
              maxLength={3}
              required
            />
          </div>
          <div className="checkoutFormButtonContainer">
            <button type="submit" className="checkoutFormButton">
              Place Order
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}

CheckoutPage.propTypes = {
  cartTotal: PropTypes.number.isRequired,
};

export default CheckoutPage;
