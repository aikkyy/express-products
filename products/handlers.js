const express = require("express");
const router = express.Router();
const Joi = require("joi");
const services = require("./services");

// validation schema
const schema = Joi.object({
  name: Joi.string(),
  detail: Joi.string(),
  price: Joi.string(),
  image: Joi.string(),
});

// CREATE
router.post("/products", (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json(error.details);
  res.status(201).json(services.create(value));
});

// READ all products
router.get("/products", (req, res) => {
  res.status(200).json(services.read());
});

// READ product by ID
router.get("/products/:id", (req, res) => {
  const product = services.show(req.params.id);
  product
    ? res.status(200).json(product)
    : res.status(404).send("Product not found");
});

// READ product by name
router.get("/products/filter/:name", (req, res) => {
  const { name } = req.params;

  const products = services.read();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );

  res.status(200).json(filteredProducts);
});

// UPDATE
router.patch("/products/:id", (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json(error.details);
  const updated = services.update(req.params.id, value);
  updated
    ? res.status(200).json(updated)
    : res.status(404).send("Product not found");
});

// DELETE
router.delete("/products/:id", (req, res) => {
  const product = services.remove(req.params.id);
  product
    ? res.status(200).json(product)
    : res.status(404).send("Product not found");
});

module.exports = router;
