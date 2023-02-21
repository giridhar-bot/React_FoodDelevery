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
