import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
} from "@mui/material";
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
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveCartItem = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  const styles = {
    appBar: {
      backgroundColor: "#2196f3",
      marginBottom: "30px",
    },
  };

  return (
    <div className="ProductListContainer">
      <AppBar position="static" css={styles.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" css={styles.logo}>
            <Home />
          </IconButton>
          <IconButton
            color="inherit"
            css={styles.cartBadge}
            onClick={() => setCartOpen(true)}
          >
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 4 }}>
        <TextField
          label="Search products"
          variant="outlined"
          size="small"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
          css={styles.search}
        />

        <Grid container spacing={7} sx={{ mt: 1 }}>
          {filteredProducts.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Card css={styles.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.id}
                    css={styles.cardMedia}
                  />
                  <CardContent css={styles.cardContent}>
                    <div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        css={styles.productTitle}
                      >
                        {product.id}
                      </Typography>
                      <div css={styles.productRating}>
                        {Array.from(
                          Array(Math.round(product.rating)).keys()
                        ).map((n) => (
                          <span key={n}>&#11088;</span>
                        ))}
                      </div>
                      <Typography variant="body2" color="textSecondary">
                        {product.description}
                      </Typography>
                    </div>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      css={styles.productPrice}
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <button
                  className="CartButton"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
              </Card>
            </Grid>
          ))}
        </Grid>

        <CartDrawer
          cartItems={cartItems}
          cartTotal={cartTotal}
          isOpen={isCartOpen}
          handleClose={() => setCartOpen(false)}
          handleRemoveItem={handleRemoveCartItem}
        />
      </Container>
    </div>
  );
}

export default ProductList;
