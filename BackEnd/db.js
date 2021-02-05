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
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
const bcrypt = require("bcrypt");
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
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let SALT_WORK_FACTOR = 5;

usersSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

usersSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

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

const getUser = async (email, password) => {
  const user = await Users.findOne({ email });
  const isMatched = await user.comparePassword(password);
  if (!isMatched) {
    throw new Error("Wrong password");
  }
  return user;
};

module.exports = { getProducts, getUser, setUser };
