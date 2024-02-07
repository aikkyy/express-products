const express = require("express");
const app = express();
const products = require("./products/handlers");

app.use(express.json());

app.use(products);

app.listen(3000, () => {
  console.log("server is running");
});
