// log errors to console
const logErrors = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
};

// client error handler
const clientErrorHandler = (err, req, res, next) => {
    if (req.xhr) {
        res.status(500).send({ error: 'Something went wrong!' });
    } else {
        next(err);
    }
};

// final error handler
const errorHandler = (err, req, res, next) => {
    res.status(500).send('Internal Server Error');
};

// Export the middleware functions
module.exports = {
    logErrors,
    clientErrorHandler,
    errorHandler,
};