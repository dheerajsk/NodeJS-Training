const events = require("events");

const eventEmitter = new events.EventEmitter();

function listner1() {
    console.log("Event recevied by Listner 1");
}

function listner2() {
    console.log("Event recevied by Listner 2");
}

eventEmitter.addListener("write", listner1);
eventEmitter.on("write", listner2);

eventEmitter.emit("write");
console.log(eventEmitter.listenerCount("write"));

eventEmitter.removeListener("write", listner1);
console.log("Listener 1 is removed");
eventEmitter.emit("write");

console.log(eventEmitter.listenerCount("write"));

console.log("Program Ended");
