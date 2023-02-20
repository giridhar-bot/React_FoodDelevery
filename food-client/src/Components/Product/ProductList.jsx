import React, { useState, useEffect } from "react";
import axios from "axios";

import { Home, ShoppingCart } from "@mui/icons-material";
import CartDrawer from "./CartDrawer";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

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

  const [cartTotal, setCartTotal] = useState(0);

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
        </div>
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
              <div className="cardContent cardContentStyle">
                <div>
                  <h2 className="productTitle productTitleStyle">
                    Name: {product.description}
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
                    Price: ${product.price}
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
    </div>
  );
}

export default ProductList;
