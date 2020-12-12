const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('send message', function (msg) {
        console.log(msg);
        io.emit('recv message', msg);
    });
});

http.listen(port, function () {
    console.log('listening on *:' + 3000);
});

