const events = require("events");

const eventEmitter = new events.EventEmitter();

eventEmitter.on("connection", handleConnectionEvent);
eventEmitter.emit("connection");
eventEmitter.emit("connection");
eventEmitter.emit("connection");
eventEmitter.emit("connection");


function handleConnectionEvent() {
    console.log("Conneciton Made!");
}

console.log("End of Program");