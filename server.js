const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const productsRouter = require('./routes/products');

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


app.use('/api/products', productsRouter);

app.listen(port, (error) => {
    if (error) {
      console.error('Error starting the server:', error);
    } else {
      console.log(`Server listening on http://localhost:${port}/api/products`);
    }
  });