
// This is not used anymore because we are using models now.
// const productCollection = [];

const Product = require("../models/product");

exports.getAddProductForm = (req, res, next) => {
    res.render('add-product');
}

exports.getListProductView = (req, res, next) => {
    res.render('list-product', { title: 'Products...', products: Product.getAll() });
}

exports.addProduct = (req, res, next) => {
    // productCollection.push(req.body);
    const product = new Product(req.body.name, req.body.description, req.body.price);
    product.save();
    res.render('list-product', { title: 'Products...', products: Product.getAll() });
}