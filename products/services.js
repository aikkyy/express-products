const data = require("./data");

function show(id) {
  return data.list().find((p) => p.id === Number(id));
}

// CREATE
function create(newProduct) {
  return data.insert(newProduct);
}

// READ
function read() {
  return data.list();
}

// UPDATE
function update(id, productUpdates) {
  return data.edit(Number(id), productUpdates);
}

// DELETE
function remove(id) {
  return data.clear(Number(id));
}

module.exports = { show, create, read, update, remove };
