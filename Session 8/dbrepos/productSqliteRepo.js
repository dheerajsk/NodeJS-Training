const config = require('../configs/sqlite');

exports.add = (product, callback) => {
    const db = config.getDB();

    const insertProductQuery = `INSERT INTO Products(name, description, price)
    VALUES('${product.name}', '${product.description}', '${product.price}')`;

    db.run(insertProductQuery, err => {
        if (err) {
            console.log(err);
        }
    })
}

exports.update = (product, callback) => {
    const db = config.getDB();
    const updateProductQuery = `
    UPDATE Products SET name='${product.name}', description='${product.description}',price=${product.price}
    WHERE _id=${product._id}`;

    db.run(updateProductQuery, err => {
        if (err) {
            console.log(err);
        } else {
            return callback();
        }
    });
}

exports.getAll = (callback) => {
    const db = config.getDB();
    const getAllProductQuery = "SELECT * FROM Products";
    db.all(getAllProductQuery, [], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            return callback(rows);
        }
    });
}

exports.get = (id, callback) => {
    const db = config.getDB();
    const getProductQuery = "SELECT * FROM Products where _id=" + id;
    db.all(getProductQuery, [], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            return callback(rows[0]);
        }
    });
}

exports.delete = (id, callback) => {
    const db = config.getDB();
    const deleteProductQuery = "DELETE FROM Products where _id=" + id;
    db.run(deleteProductQuery, err => {
        if (err) {
            console.log(err);
        } else {
            return callback();
        }
    });
}