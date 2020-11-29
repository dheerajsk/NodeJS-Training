const express = require("express");
const bodyParser = require('body-parser');

const productRoutes = require("./routes/product");

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/product', productRoutes);

app.use('/', (req, res, next) => {
    res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(3300);

console.log("Server is listening on port 3300...");