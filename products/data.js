const products = [
  {
    id: 1,
    name: "hero",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    image: "http://placehold.it/940x300/999/CCC",
  },
  {
    id: 2,
    name: "Product 1",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    image: "http://placehold.it/300x300/999/CCC",
  },
  {
    id: 3,
    name: "Product 2",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    image: "http://placehold.it/300x300/999/CCC",
  },
  {
    id: 4,
    name: "Product 3",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    image: "http://placehold.it/300x300/999/CCC",
  },
  {
    id: 5,
    name: "Product 4",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    image: "http://placehold.it/300x300/999/CCC",
  },
  {
    id: 6,
    name: "Product 5",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    image: "http://placehold.it/300x300/999/CCC",
  },
  {
    id: 7,
    name: "Product 6",
    detail: "Lorem ipsum dolor sit amet",
    price: "99",
    image: "http://placehold.it/300x300/999/CCC",
  },
];

// CREATE
function insert(product) {
  const newProduct = {
    id: products.length + 1,
    ...product,
  };

  products.push(newProduct);

  return newProduct;
}

// READ
function list() {
  return products;
}

// UPDATE
function edit(id, productUpdates) {
  const index = products.findIndex((p) => p.id === parseInt(id));
  if (index > -1) {
    products[index] = { ...products[index], ...productUpdates };
    return products[index];
  }
  return null;
}

// DELETE
function clear(id) {
  const index = products.findIndex((p) => p.id === parseInt(id));
  if (index > -1) {
    return products.splice(index, 1)[0];
  }
  return null;
}

module.exports = { insert, list, clear, edit };
