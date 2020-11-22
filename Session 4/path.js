const path = require("path");

const resolvedPath = path.resolve('path.js');
console.log("Resolved Path : " + resolvedPath);

const ext = path.extname('path.js');
console.log("Etension is " + ext);

const dirName = path.dirname('FileSystem/dir.js');
console.log("Dir is " + dirName);

