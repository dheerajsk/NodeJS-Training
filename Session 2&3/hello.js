const { EventEmitter } = require("events");

var em = require("events").EventEmitter;

var eem = new EventEmitter();

eem.on("cc", ()=>{
    console.log("sd");
})

eem.emit("cc2");