const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    price: 10.99,
    rating: 4.5,
    description: "Butter chicken",
  },
  {
    id: 2,
    price: 19.99,
    rating: 3.2,
    description: "Biryani",
  },
  {
    id: 3,
    price: 5.99,
    rating: 4.0,
    description: "Palak paneer",
  },
  {
    id: 4,
    price: 12.49,
    rating: 4.8,
    description: "Tandoori chicken",
  },
  {
    id: 5,
    price: 9.99,
    rating: 3.5,
    description: "Samosas",
  },
  {
    id: 6,
    price: 29.99,
    rating: 4.2,
    description: "Dosa",
  },
  {
    id: 7,
    price: 7.99,
    rating: 3.0,
    description: "Gulab jamun",
  },
  {
    id: 8,
    price: 15.99,
    rating: 4.5,
    description: "Lassi",
  },
  {
    id: 9,
    price: 24.99,
    rating: 4.7,
    description: "Chole bhature",
  },
  {
    id: 10,
    price: 8.99,
    rating: 3.9,
    description: "Vada pav",
  },

  {
    id: 11,
    price: 11.99,
    rating: 4.1,
    description: "Mutton biryani",
  },
  {
    id: 12,
    price: 6.99,
    rating: 3.8,
    description: "Aloo gobi",
  },
  {
    id: 13,
    price: 16.99,
    rating: 4.4,
    description: "Chicken tikka masala",
  },
  {
    id: 14,
    price: 8.49,
    rating: 3.6,
    description: "Paneer makhani",
  },
  {
    id: 15,
    price: 13.99,
    rating: 4.3,
    description: "Fish curry",
  },
  {
    id: 16,
    price: 4.99,
    rating: 2.9,
    description: "Papdi chaat",
  },
  {
    id: 17,
    price: 20.99,
    rating: 4.6,
    description: "Lamb rogan josh",
  },
  {
    id: 18,
    price: 9.99,
    rating: 3.7,
    description: "Vegetable samosas",
  },
  {
    id: 19,
    price: 26.99,
    rating: 4.8,
    description: "Prawn masala",
  },
  {
    id: 20,
    price: 7.99,
    rating: 3.4,
    description: "Raita",
  },
];

// Create a new product
app.post("/products", (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Get a single product
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send("Product not found");
  res.json(product);
});

// Update a product
app.put("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) return res.status(404).send("Product not found");
  const updatedProduct = req.body;
  updatedProduct.id = productId;
  const index = products.findIndex((p) => p.id === productId);
  products[index] = updatedProduct;
  res.json(updatedProduct);
});

// Delete a product
app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) return res.status(404).send("Product not found");
  const index = products.findIndex((p) => p.id === productId);
  products.splice(index, 1);
  res.send("Product deleted successfully");
});

app.listen(3100, () => {
  console.log("Server listening on port 3100");
});
