const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
const routes = require("./routes");
app.use("/", routes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// Global Error Handler
const { errorHandler } = require("./middleware");
app.use(errorHandler);

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});