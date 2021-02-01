const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://lucile:${process.env.DB_PASS}@cluster0.qdb4u.mongodb.net/Bluce?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

const connect = async () => {
  await client.connect();
  db = client.db("bluce");
};
connect();

const getProducts = async () => {
  const collection = db.collection("products");
  const products = await collection.find().toArray();
  return products;
};

module.exports = { getProducts };
