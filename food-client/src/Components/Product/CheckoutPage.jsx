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


// This is a React functional component called CheckoutPage that represents a modal window where the user can enter their payment details to complete the checkout process. The component receives a single prop called cartTotal which represents the total cost of the items in the shopping cart.

// The component defines several state variables using the useState hook to store the user's input for name, email, address, card number, expiry date, and CVV. It also defines a boolean isSubmitted variable that determines whether the order has been successfully placed or not, and an isOpen variable that determines whether the modal window is open or not.

// The component renders a Modal component from the react-modal library that displays the payment form. If the isSubmitted variable is true, it displays a success message with the order details and the total cost. Otherwise, it displays a form with input fields for the user to enter their payment details.

// When the user submits the form, the handleSubmit function is called which sets the isSubmitted variable to true, triggering the display of the success message.

// The component also defines a handleClose function that is called when the user clicks the close button in the top-right corner of the modal window. This function sets the isOpen variable to false, closing the modal window.

// Finally, the component defines the propTypes property to validate the cartTotal prop, ensuring that it is a number and is required.