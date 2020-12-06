const repo = require("../dbrepos/productSqliteRepo");
const Product = require("../models/product");

exports.add = (req, res) => {
    console.log(req.body);
    if (!req.body.name) {
        res.status(204).send();
    }
    const product = new Product(req.body.name, req.body.description, req.body.price);
    repo.add(product);
    res.status(200).send();
}

exports.update = (req, res) => {
    const product = new Product(req.body.name, req.body.description, req.body.price, req.body._id);
    repo.update(product, () => {
        repo.get(product._id, (productResult) => {
            res.status(200).send(productResult);
        });
    });
}

exports.get = (req, res) => {
    const id = req.path.toString().replace("/", "");
    repo.get(id, (product) => {
        if (product) {
            res.status(200).send(product);
        } else {
            res.status(404).send();
        }
    })
}

exports.getAll = (req, res) => {
    repo.getAll((products) => {
        res.status(200).send(products);
    })
}

exports.delete = (req, res) => {
    const id = req.path.toString().replace("/", "");
    repo.delete(id, () => {
        res.status(200).send();
    })
}