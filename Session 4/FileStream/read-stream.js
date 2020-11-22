const fs = require("fs");

const readStream = fs.createReadStream("StreamOutput.txt");

var data = "Initial Data ";
readStream.on('data', (chunk) => data += chunk);

readStream.on('end', () => {
    console.log(data);
});

console.log(data);
console.log("End of Program");