const fs = require("fs");

// const result = fs.readFileSync('testData.txt');
// console.log(result.toString());

fs.readFile('testData.txt', function (err, data) {
    console.log(data.toString());
});
console.log("This is another code");