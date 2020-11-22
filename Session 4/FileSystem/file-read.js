const fs = require("fs");

// Read file Asynchronously.

fs.readFile("FileToRead.txt", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

// Read file Synchronously
const result = fs.readFileSync('FileToRead.txt');
console.log(result.toString());