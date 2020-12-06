
// This is not used anymore because we are using models now.
// const productCollection = [];

const Product = require("../models/product");
// const repo = require("../dbrepos/productRepo");
const repo = require("../dbrepos/productSqliteRepo");

exports.getAddProductForm = (req, res, next) => {
    res.render('add-product');
}

exports.getUpdateProductForm = (req, res, next) => {
    const id = req.query.id;
    repo.get(id, (result) => {
        res.render('update-product', { product: result });
    })
}

exports.getListProductView = (req, res, next) => {
    // res.render('list-product', { title: 'Products...', products: Product.getAll() });
    repo.getAll((products) => {
        res.render('list-product', { title: 'Products...', products: products });
    });
}

exports.addProduct = (req, res, next) => {
    // productCollection.push(req.body);
    const product = new Product(req.body.name, req.body.description, req.body.price);
    repo.add(product);
    // product.save();
    // res.render('list-product', { title: 'Products...', products: Product.getAll() });
    repo.getAll((products) => {
        console.log("Products received");
        res.render('list-product', { title: 'Products...', products: products });
    });
}

exports.updateProduct = (req, res, next) => {
    // productCollection.push(req.body);
    const product = new Product(req.body.name, req.body.description, req.body.price, req.body._id);
    repo.update(product, () => {
        repo.getAll((products) => {
            console.log("Products received");
            res.render('list-product', { title: 'Products...', products: products });
        });
    });
    // product.save();
    // res.render('list-product', { title: 'Products...', products: Product.getAll() });
}

exports.deleteProduct = (req, res, next) => {
    const id = req.query.id;
    repo.delete(id, () => {
        repo.getAll((products) => {
            res.render('list-product', { title: 'Products...', products: products });
        })
    })
}