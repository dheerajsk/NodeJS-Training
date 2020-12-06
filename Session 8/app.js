const express = require("express");
// const bodyParser = require('body-parser');
const bodyParser = require('body-parser').json();
// const mongodbConfig = require('./configs/mongodb');
const sqliteConfig = require('./configs/sqlite');

const productRoutes = require("./routes/product");
const productApiRoutes = require("./routes/api_product");

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

// mongodbConfig.connect(() => {
//     console.log("Connected to MongoDB in Express");
// })
sqliteConfig.connect(() => {
    console.log("Connection Successful");
});

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser);
app.use('/product', productRoutes);
app.use('/api/Product', productApiRoutes);

app.use('/', (req, res, next) => {
    res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(3300);

console.log("Server is listening on port 3300...");