const express = require('express');
const app = express();

// Add request time
const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};

// Logging middleware
const myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
};

// Use middlewares
app.use(requestTime);
app.use(myLogger);

// Route handling
app.get('/', (req, res) => {
    let responseText = 'Hello! <br>';
    responseText += `<small>Requested at: ${req.requestTime}</small>`;
    res.send(responseText);
});

// Export middleware functions
module.exports = {
    requestTime,
    myLogger,
};