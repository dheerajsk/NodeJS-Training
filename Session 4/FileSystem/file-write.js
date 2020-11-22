const fs = require("fs");

// Async 
// fs.writeFile("FileToWrite.txt", "This is a test data!", handleWriteFileCallback);

// function handleWriteFileCallback(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Data written successfully!");
//     }
// }

// Sync
fs.writeFileSync("FileToWriteSync.txt", "This is a test data in sync!");