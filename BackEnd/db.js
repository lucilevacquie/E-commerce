// const MongoClient = require("mongodb").MongoClient;
// const uri = `mongodb+srv://lucile:${process.env.DB_PASS}@cluster0.qdb4u.mongodb.net/Bluce?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let db;

// const connect = async () => {
//   await client.connect();
//   db = client.db("bluce");
// };
// connect();

// const getProducts = async () => {
//   const collection = db.collection("products");
//   const products = await collection.find().toArray();
//   return products;
// };

// module.exports = { getProducts };

const mongoose = require("mongoose");
const uri = `mongodb+srv://lucile:${process.env.DB_PASS}@cluster0.qdb4u.mongodb.net/bluce?retryWrites=true&w=majority`;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const productsSchema = new mongoose.Schema({
  title: String,
  img: String,
  price: String,
});

const Products = mongoose.model("Product", productsSchema);

const getProducts = async () => {
  const products = await Products.find({});
  return products;
};

const usersSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const Users = mongoose.model("User", usersSchema);

const setUser = async (userData) => {
  const user = new Users({
    firstname: userData.firstName,
    lastname: userData.lastName,
    email: userData.email,
    password: userData.password,
  });
  await user.save();
};

const getUsers = async () => {
  const users = await Users.find({});
  return users;
};

module.exports = { getProducts, getUsers, setUser };
