// Validation Middleware
exports.validateData = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Request body cannot be empty" });
  }
  next();
};

// Error Handling Middleware
exports.errorHandler = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: "Internal Server Error" });
};