import React from "react";
import PropTypes from "prop-types";
import "./CartItem.css";

function CartItem({ item, handleRemoveCartItem }) {
  return (
    <div key={item.id} className="cartItem">
      <div className="cartItemDetails">
        <img src={item.image} alt={item.description} />
        <p>{item.description}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ₹ {item.price}</p>
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


// The component receives two props:

// item (object): An object representing an item in the cart, with the following properties:

// id (number): A unique identifier for the item.
// image (string): The URL of the item's image.
// description (string): A short description of the item.
// quantity (number): The quantity of the item in the cart.
// price (number): The price of the item.
// handleRemoveCartItem (function): A callback function that handles removing the item from the cart.

// The component renders the item's details, including the image, description, quantity, and price. It also renders a "Remove" button, which calls the handleRemoveCartItem function with the item.id as its argument when clicked.

// The CartItem component also defines PropTypes to ensure that the props passed to it are of the correct data type. The item prop is validated using the PropTypes.shape() method, which checks that the object has the required properties with the specified data types. The handleRemoveCartItem prop is validated using PropTypes.func.isRequired, which checks that the prop is a function and is required.

// Finally, the CartItem component is exported using the export default statement at the bottom of the file.