const fs = require("fs");

// Async

fs.unlink("FileToWriteSync.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted!");
    }
});

// Sync
fs.unlinkSync("FileToDeleteSync.txt");
console.log("File deleted!");