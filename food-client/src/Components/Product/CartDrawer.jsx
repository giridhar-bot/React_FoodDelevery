import React, { useState } from "react";
import PropTypes from "prop-types";
import { Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./CartDrawer.css";
import CartItem from "./CartItem";
import CheckoutPage from "./CheckoutPage";

function CartDrawer(props) {
  const { cartItems, cartTotal, isOpen, handleClose, handleRemoveCartItem } =
    props;
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  function handleCheckout() {
    setIsCheckingOut(true);
  }

  if (isCheckingOut) {
    return <CheckoutPage cartTotal={cartTotal} />;
  }

  return (
    <Drawer anchor="right" open={isOpen} onClose={handleClose}>
      <div className="cartDrawerContainer">
        <div className="cartDrawerHeader">
          <h2 className="cartDrawerTitle">Your Cart</h2>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="cartDrawerItems">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleRemoveCartItem={handleRemoveCartItem}
              />
            ))
          )}
        </div>
        <div className="cartDrawerFooter">
          <p className="cartDrawerTotal">Total: ₹ {cartTotal}</p>
          <button className="cartDrawerCheckoutButton" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </Drawer>
  );
}

CartDrawer.propTypes = {
  cartItems: PropTypes.array.isRequired,
  cartTotal: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleRemoveCartItem: PropTypes.func.isRequired,
};

export default CartDrawer;
// This is a functional React component named CartDrawer that renders a drawer component from Material UI library.

// The component receives several props:

// cartItems (array): An array of objects representing items in the cart.
// cartTotal (number): The total price of all items in the cart.
// isOpen (bool): A boolean value that determines whether the drawer is open or closed.
// handleClose (function): A callback function that handles closing the drawer.
// handleRemoveCartItem (function): A callback function that handles removing an item from the cart.
// The component also uses the useState hook to manage a local state variable called isCheckingOut. If isCheckingOut is true, the component returns a CheckoutPage component instead of rendering the contents of the drawer.

// Inside the return statement, the Drawer component is used with anchor, open and onClose props to configure the drawer. The cartDrawerContainer div contains the header, items, and footer of the cart drawer.

// The header section contains a title and a close button. The items section conditionally renders either a message indicating that the cart is empty or a list of CartItem components, which are rendered using the map method on the cartItems array.

// The footer section displays the total cost of items in the cart and a checkout button, which calls the handleCheckout function when clicked. The CartDrawer component also defines PropTypes to ensure that the props passed to it are of the correct data type.

// Finally, the CartDrawer component is exported using the export default statement at the bottom of the file.