module.exports = (err, req, res, next) => {
  res.status(err.status || 400).json({
    code: err.code || "ERROR",
    message: err.message || "Something went wrong",
    details: err.details || []
  });
};