const express = require("express");

const router = express.Router();

const productController = require("../api_controllers/product");

router.post("/", productController.add);

router.get("/", productController.getAll);

router.get("/:id", productController.get);

router.put("/", productController.update);

router.delete("/:id", productController.delete);

module.exports = router;