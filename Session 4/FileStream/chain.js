const fs = require("fs");
const zlib = require('zlib');

fs.createReadStream('pipeStream.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('pipeStream.txt.gz'));


console.log("End");


const anonymousFunction = ()=>{

}

module.exports = anonymousFunction;
