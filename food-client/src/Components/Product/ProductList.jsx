import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Home, ShoppingCart } from "@mui/icons-material";
import CartDrawer from "./CartDrawer";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:3100/products")
      .then((response) => setProducts(response.data))
      .catch((error) => {
        console.log(error);
        // Show error message to the user
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);
    if (existingCartItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveCartItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    const updatedCartTotal = updatedCartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCartItems(updatedCartItems);
    setCartTotal(updatedCartTotal);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    history.push("/login");
  };

  useEffect(() => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  return (
    <div className="ProductListContainer">
      <div className="appBar appBarStyle">
        <div className="toolbar">
          <button className="logo" onClick={() => console.log("Home clicked")}>
            <Home />
          </button>
          <button className="cartBadge" onClick={() => setCartOpen(true)}>
            <div className="badge badgeStyle">{cartItems.length}</div>
            <ShoppingCart />
          </button>
          <div className="pageTitle">foodie</div>
        </div>
        <button className="logoutButton" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="container" style={{ padding: "24px" }}>
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={handleSearch}
          className="searchBox searchBoxStyle"
        />

        <div className="grid productListStyle">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card cardStyle">
              <img
                src={product.image}
                alt={product.description}
                className="productImage"
              />
              <div className="cardContent cardContentStyle">
                <div>
                  <h2 className="productTitle productTitleStyle">
                    {product.description}
                  </h2>
                  <div className="productRating productRatingStyle">
                    Rating:{" "}
                    {Array.from(Array(Math.round(product.rating)).keys()).map(
                      (n) => (
                        <span key={n}>&#11088;</span>
                      )
                    )}
                  </div>
                  <div className="productPrice productPriceStyle">
                    Price: ₹ {product.price}
                  </div>
                  <button
                    className="addButton addButtonStyle"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CartDrawer
        cartItems={cartItems}
        cartTotal={cartTotal}
        isOpen={isCartOpen}
        handleClose={() => setCartOpen(false)}
        handleRemoveCartItem={handleRemoveCartItem}
      />
      <footer className="footer">
        <div className="FooterTextContainer">
          Food is Art and life should be colorful and delicious
        </div>
      </footer>
    </div>
  );
}

export default ProductList;

// This code defines a React component called ProductList which displays a list of products fetched from a backend API and allows users to search for products, add them to a shopping cart, and view the contents of the cart. The component also includes a navigation bar with a logo, a shopping cart icon, a page title, and a logout button, as well as a footer with a message.

// The component uses several hooks from the React library, including useState, useEffect, and useHistory. It also uses the axios library to make HTTP requests to the backend API and the react-router-dom library to handle navigation.

// Here is a summary of the key parts of the code:

// The ProductList component uses the useState hook to define several pieces of state:

// products: an array of products fetched from the backend API
// searchTerm: a string representing the user's search query
// cartItems: an array of items in the shopping cart
// isCartOpen: a boolean indicating whether the shopping cart drawer is open or closed
// cartTotal: a number representing the total price of the items in the shopping cart
// The ProductList component uses the useEffect hook to fetch the list of products from the backend API when the component is mounted.

// The ProductList component defines several event handlers:

// handleSearch: updates the searchTerm state based on the user's input in the search box
// handleAddToCart: adds a product to the cartItems state, either by creating a new item or incrementing the quantity of an existing item
// handleRemoveCartItem: removes an item from the cartItems state
// handleLogout: removes the loggedIn item from local storage and navigates the user to the login page
// The ProductList component uses the useEffect hook to calculate the cartTotal state based on the contents of the cartItems state whenever the cartItems state changes.

// The ProductList component renders a navigation bar, a search box, a grid of product cards, a shopping cart drawer, and a footer.

// The CartDrawer component is a separate component that displays the contents of the shopping cart as a drawer. It receives several props from the ProductList component, including the cartItems array, the cartTotal number, and event handlers for closing the drawer and removing items from the cart.
