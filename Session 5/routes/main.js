const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.send("<h1>this is from main</h1>");
});

module.exports = router;