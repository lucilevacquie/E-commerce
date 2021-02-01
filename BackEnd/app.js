const express = require("express");
const app = express();
const { getProducts } = require("./db");

const port = process.env.PORT || 3001;

app.get("/api/products", async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

app.listen(port, () => console.log(`Application listening on port ${port}!`));
