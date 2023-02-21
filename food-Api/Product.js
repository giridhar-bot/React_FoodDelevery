const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    price: 250,
    rating: 4.5,
    description: "Butter chicken",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&webp=true&resize=300,272",
  },
  {
    id: 2,
    price: 180,
    rating: 3.2,
    description: "Biryani",
    image:
      "https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_740,h_493,al_c,lg_1,q_85,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg",
  },
  {
    id: 3,
    price: 220,
    rating: 4.0,
    description: "Palak paneer",
    image:
      "https://www.indianveggiedelight.com/wp-content/uploads/2020/05/palak_paneer.jpg",
  },
  {
    id: 4,
    price: 50,
    rating: 4.8,
    description: "Lassi",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F6ecda729f0ffb26ffb5a9e7801b87f28%2F1663965703Indian%2520Lassi.jpg&q=60&c=sc&orient=true&poi=auto&h=512",
  },
  {
    id: 5,
    price: 10,
    rating: 3.5,
    description: "Samosas",
    image:
      "https://cdn.britannica.com/57/170657-050-C9620E39/Indian-samosa-chutney.jpg",
  },
  {
    id: 6,
    price: 60,
    rating: 4.2,
    description: "Dosa",
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/dosa-recipe-1-1024x1536.jpg",
  },
  {
    id: 7,
    price: 600,
    rating: 4.0,
    description: "Mutton",
    image:
      "https://www.thespruceeats.com/thmb/u1QyfXw4Urb2JpHwLIRIDp9TNMc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg",
  },
  {
    id: 8,
    price: 120,
    rating: 4.1,
    description: "Raita",
    image:
      "https://dinedelicious.in/wp-content/uploads/2021/03/Boondi-Raita-3.jpg",
  },

  {
    id: 9,
    price: 160,
    rating: 3.7,
    description: "Chana Masala",
    image:
      "https://www.indianveggiedelight.com/wp-content/uploads/2021/01/chana-masala-instant-pot.jpg",
  },
  {
    id: 10,
    price: 310,
    rating: 4.5,
    description: "Tandoori Chicken",
    image:
      "https://www.foodandwine.com/thmb/1fQqPlTxkjIKNWXdzlCP1YJkt7A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grilled-tandoori-chicken-FT-RECIPE1021-a61b1a767cb74c3c976c85799a378968.jpg",
  },
  {
    id: 11,
    price: 120,
    rating: 4.2,
    description: "Aloo Gobi",
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/26-may/Aloo_Gobi_Sabzi_Recipe-4.jpg",
  },
  {
    id: 12,
    price: 250,
    rating: 3.8,
    description: "Chicken Tikka Masala",
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2017/11/Chicken-Tikka-Masala-1.jpg",
  },
  {
    id: 13,
    price: 150,
    rating: 4.0,
    description: "Vegetable Biryani",
    image:
      "https://www.authenticroyal.com/wp-content/uploads/2016/11/vegetable-biryani.jpg",
  },
  {
    id: 14,
    price: 30,
    rating: 3.5,
    description: "Papad",
    image:
      "https://tasteofindore.store/wp-content/uploads/2019/11/Urad-papad-Plain-Sada.jpg",
  },
  {
    id: 15,
    price: 60,
    rating: 4.3,
    description: "Mango Lassi",
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2020/05/Mango-Lassi-2-1.jpg",
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
