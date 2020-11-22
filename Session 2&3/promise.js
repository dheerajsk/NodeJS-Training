const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/EmployeeDB?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

MongoClient.connect(uri).then(function (client) {
    console.log("Connected to MongoDB");
    const collection = client.db('EmployeeDB').collection('Employee');

    collection.insertOne({ name: 'Dheeraj K', role: 'Trainer', location: 'Pune' })
        .then(() => {
            console.log("Document inserted");
        })

})
    .catch(function (err) {
        console.log(err);
    }).finally(() => {
        console.log("this is finally block");
    })