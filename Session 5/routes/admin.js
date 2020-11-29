const express = require("express");

const router = express.Router();

router.get('/enter', (req, res) => {
    res.send("<h1>hello admin enter page</h1>");
});

router.post('/hello', (req, res) => {
    res.send("<h1>hello admin</h1>");
});

router.get('/', (req, res) => {
    res.send("<h1>page not found n</h1>");
});

module.exports = router;