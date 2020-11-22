const request = require('request');

request("http://www.google.com", (error, response, body) => {
    if (error) {
        console.log(error);
    }
    console.log("StatusCode : ", response && response.statusCode);
    console.log(body);
})