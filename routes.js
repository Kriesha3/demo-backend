const express = require("express");
const router = express.Router();
const { validateData } = require("./middleware");
const controller = require("./controller");

// ----------------- PRODUCTS -----------------
router.get("/products", controller.getAllProducts);
router.post("/products", validateData, controller.createProduct);
router.put("/products/:id", validateData, controller.updateProduct);
router.delete("/products/:id", controller.deleteProduct);

// ----------------- USERS -----------------
router.get("/users", controller.getAllUsers);
router.post("/users", validateData, controller.createUser);
router.put("/users/:id", validateData, controller.updateUser);
router.delete("/users/:id", controller.deleteUser);

// ----------------- CART -----------------
router.get("/cart", controller.getAllCart);
router.post("/cart", validateData, controller.createCartItem);
router.put("/cart/:id", validateData, controller.updateCartItem);
router.delete("/cart/:id", controller.deleteCartItem);

// ----------------- ORDERS -----------------
router.get("/orders", controller.getAllOrders);
router.post("/orders", validateData, controller.createOrder);
router.put("/orders/:id", validateData, controller.updateOrder);
router.delete("/orders/:id", controller.deleteOrder);

module.exports = router;