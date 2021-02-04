require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { getProducts, getUsers, setUser } = require("./db");

const port = process.env.PORT || 3001;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/api/products", async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

app.post("/api/users", async (req, res) => {
  await setUser(req.body);
  res.send();
});

app.listen(port, () => console.log(`Application listening on port ${port}!`));
