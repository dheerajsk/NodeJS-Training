const fs = require("fs");

const dirName = "NewDir";

try {
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
    } else {
        // console.error("Directory already exists");
        throw new Error("Directory already exists");
    }
}
catch (err) {
    console.log(err);
}