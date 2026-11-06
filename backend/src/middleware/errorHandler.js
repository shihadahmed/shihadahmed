export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  
  const response = {
    success: false,
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  };
  
  if (err.name === 'ValidationError') {
    response.message = 'Validation Error';
    response.errors = Object.values(err.errors).map(e => e.message);
    res.status(400);
  }
  
  if (err.name === 'CastError') {
    response.message = 'Resource not found';
    res.status(404);
  }
  
  if (err.code === 11000) {
    response.message = 'Duplicate field value entered';
    res.status(400);
  }
  
  console.error(`[${new Date().toISOString()}] ${err.name}: ${err.message}`);
  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
  }
  
  res.json(response);
};