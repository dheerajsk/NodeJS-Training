const express = require("express");

const mainRoutes = require("./routes/main");
const adminRoutes = require("./routes/admin");

const app = express();

app.use('/admin', adminRoutes);
app.use('/main', mainRoutes);

app.use('/', (req, res, next) => {
    res.status(404).send("<h1>Page not found!</h1>");
    // next();
});

app.listen(3300);

console.log("Server is listening on port 3300...");