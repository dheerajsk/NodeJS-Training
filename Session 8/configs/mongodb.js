const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/ProductDB?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true });

var collection;

module.exports = {

    connect: function (callback) {
        MongoClient.connect(uri)
            .then(function (client) {
                console.log("Conected to MongoDB : ProductDB");
                collection = client.db('ProductDB').collection('Products');
                return callback("OK");
            })
            .catch(function (err) {
                console.log(err);
            })
    },

    getCollection: function () {
        return collection;
    }
}