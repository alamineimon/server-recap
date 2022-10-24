const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const productCollection = require("./Data/product.json");

app.get("/", (req, res) => {
  res.send("Al Amin Eimon");
});
app.get("/allproduct", (req, res) => {
  res.send(productCollection);
});



app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const singleProduct =productCollection ?. find(p => p.id == id);
  if (!singleProduct) {
    res.send('Product Nai');
  }
  res.send(singleProduct);
});


app.get("/catagory/:name", (req, res) => {
  const name = req.params.name;
  const catagoryProduct = productCollection ?.filter((p) => p.category == name);
  res.send(catagoryProduct);
});





app.listen(Port, () => {
  console.log("Sercver is reunning on Port:", Port);
});

module.exports = app;
