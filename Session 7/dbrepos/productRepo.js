
const { ObjectID, ObjectId } = require('mongodb');
const db = require('../configs/mongodb');

exports.add = (product, callback) => {
    const collection = db.getCollection();
    collection.insertOne({ name: product.name, description: product.description, price: product.price })
        .then(() => {
            console.log("Document inserted");
        })
}

exports.update = (product, callback) => {
    const collection = db.getCollection();
    collection.findOneAndUpdate(
        { _id: ObjectId(product._id) },
        {
            $set: { name: product.name, description: product.description, price: product.price }
        }, {})
        .then(() => {
            console.log("Document updated");
            return callback();
        })
}

exports.getAll = (callback) => {
    const collection = db.getCollection();
    collection.find().toArray()
        .then((products) => {
            // console.log(products);
            return callback(products);
        });
}

exports.get = (id, callback) => {
    const collection = db.getCollection();
    collection.findOne({ _id: ObjectId(id) })
        .then((product) => {
            return callback(product);
        });
}

exports.delete = (id, callback) => {
    const collection = db.getCollection();
    collection.deleteOne({ _id: ObjectId(id) })
        .then((result) => {
            return callback();
        });
}