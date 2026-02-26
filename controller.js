// controller.js
const products = [];
const users = [];
const cart = [];
const orders = [];

// ----------------- PRODUCTS -----------------
exports.getAllProducts = (req, res) => res.json(products);

exports.createProduct = (req, res) => {
  const newProduct = { id: products.length + 1, name: req.body.name, price: req.body.price };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  product.name = req.body.name;
  product.price = req.body.price;
  res.json(product);
};

exports.deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Product not found" });
  products.splice(index, 1);
  res.json({ message: "Product deleted" });
};

// ----------------- USERS -----------------
exports.getAllUsers = (req, res) => res.json(users);

exports.createUser = (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  user.name = req.body.name;
  res.json(user);
};

exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "User not found" });
  users.splice(index, 1);
  res.json({ message: "User deleted" });
};

// ----------------- CART -----------------
exports.getAllCart = (req, res) => res.json(cart);

exports.createCartItem = (req, res) => {
  const newItem = { id: cart.length + 1, userId: req.body.userId, productId: req.body.productId };
  cart.push(newItem);
  res.status(201).json(newItem);
};

exports.updateCartItem = (req, res) => {
  const item = cart.find(c => c.id == req.params.id);
  if (!item) return res.status(404).json({ message: "Cart item not found" });
  item.userId = req.body.userId;
  item.productId = req.body.productId;
  res.json(item);
};

exports.deleteCartItem = (req, res) => {
  const index = cart.findIndex(c => c.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Cart item not found" });
  cart.splice(index, 1);
  res.json({ message: "Cart item deleted" });
};

// ----------------- ORDERS -----------------
exports.getAllOrders = (req, res) => res.json(orders);

exports.createOrder = (req, res) => {
  const newOrder = { id: orders.length + 1, userId: req.body.userId, total: req.body.total };
  orders.push(newOrder);
  res.status(201).json(newOrder);
};

exports.updateOrder = (req, res) => {
  const order = orders.find(o => o.id == req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  order.userId = req.body.userId;
  order.total = req.body.total;
  res.json(order);
};

exports.deleteOrder = (req, res) => {
  const index = orders.findIndex(o => o.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Order not found" });
  orders.splice(index, 1);
  res.json({ message: "Order deleted" });
};