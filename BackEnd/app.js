require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { getProducts, setUser, getUser } = require("./db");

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
  try {
    await setUser(req.body);
  } catch (error) {
    return res.status(500).send(error);
  }
  res.send();
});

app.post("/api/users/login", async (req, res) => {
  try {
    const user = await getUser(req.body.email, req.body.password);
    res.json(user);
  } catch (error) {
    if (error.message === "Wrong password") {
      return res.status(401).send(error);
    }
    return res.status(500).send(error);
  }
});

app.listen(port, () => console.log(`Application listening on port ${port}!`));
