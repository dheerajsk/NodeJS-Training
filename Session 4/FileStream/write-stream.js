const fs = require("fs");

const writeStream = fs.createWriteStream("StreamOutput.txt");

writeStream.write("This is data form write stream");
writeStream.end();

writeStream.on("finish", () => {
    console.log("Finished");
});

writeStream.on("ready", () => {
    console.log("Ready");
});

writeStream.on("close", () => {
    console.log("Closed");
});

writeStream.on("error", (err) => {
    console.log("Error");
});

console.log("End of Program");

