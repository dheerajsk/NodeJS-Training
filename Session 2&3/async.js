const { result } = require("underscore");

async function demo() {
    const promise = new Promise((resolve, reject) => {
        console.log("Time out starts");
        setTimeout(() => resolve("done!"), 5000)
    });
    const responseAfterASecond = await promise;
    console.log(responseAfterASecond);
}

demo();

