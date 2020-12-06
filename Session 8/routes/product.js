const express = require("express");
// const path = require("path");

const router = express.Router();

const productController = require("../controllers/product");

// const productCollection = [];

// router.get('/add', (req, res) => {
//     // console.log(path.join(__dirname, '../', 'views', 'add-product.html'));
//     // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
//     // res.render('add-product');

//     // Forwarding request to controller, becuase rendering views is not my job.

// });

router.get('/add', productController.getAddProductForm);

router.post('/add', productController.addProduct);

router.get('/update', productController.getUpdateProductForm);
router.post('/update', productController.updateProduct);
router.get('/delete', productController.deleteProduct);


// router.get('/view', (req, res) => {
//     res.render('list-product', { title: 'Products...', products: productCollection });
// });

router.get('/view', productController.getListProductView);

// router.post('/add', (req, res) => {
//     console.log("POST request is received.");
//     console.log(req.body);
//     productCollection.push(req.body);
//     // res.sendFile(path.join(__dirname, '../', 'views', 'list-product.html'));
//     res.render('list-product', { title: 'Products...', products: productCollection });
// })


module.exports = router;