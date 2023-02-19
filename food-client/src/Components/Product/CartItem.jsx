import React from "react";
import PropTypes from "prop-types";
import "./CartItem.css";

function CartItem({ item, handleRemoveCartItem }) {
  return (
    <div key={item.id} className="cartItem">
      <div className="cartItemDetails">
        <p>{item.description}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${item.price}</p>
      </div>
      <button
        className="cartItemRemoveButton"
        onClick={() => handleRemoveCartItem(item.id)}
      >
        Remove
      </button>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  handleRemoveCartItem: PropTypes.func.isRequired,
};

export default CartItem;
