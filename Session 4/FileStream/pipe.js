const fs = require("fs");

const readStream = fs.createReadStream("pipeStream.txt");

const writeStream = fs.createWriteStream("pipeOutPutStream.txt");

readStream.pipe(writeStream);
console.log("Program End");