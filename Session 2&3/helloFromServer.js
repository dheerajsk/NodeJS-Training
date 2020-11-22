const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/" || req.url == "") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>Welcome To Node Server!</h1><br /> <form method="POST" action="employee"> Name: <input type="text" name="employee" /> <br /><br /> Role: <input type="text" name="role" /> <br /><br /> <button type="submit">Submit</button> </form></body></html>');
        return res.end();
    }
    else if (req.url == "/employee" && req.method == "POST") {
        const body = [];
        console.log("Request has been received");
        req.on('data', chunk => body.push(chunk));
        req.on('end', () => {
            console.log("Body has been received");
            var parsedBody = body.toString();
            // employee=dheeraj&role=trainer
            const bodyParts = parsedBody.split('&');
            const employeeParts = bodyParts[0].split('=');
            const roleParts = bodyParts[1].split('=');

            console.log("Body has parsed.");
            res.write("Hello " + employeeParts[1] + "! You are a " + roleParts[1])
            return res.end();
        });

        console.log("Returing Response");
    }
});

server.listen(3300, "localhost");

console.log("Server is listening on localhost: 3300");