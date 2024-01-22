class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  let { statusCode, message } = err;
  statusCode = statusCode || 500;
  message = message || "Internal Server Error";

  res.status(statusCode).send({
    status: "error",
    statusCode,
    message,
  });
};

export default ErrorHandler;