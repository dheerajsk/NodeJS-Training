const cluster = require('cluster');


if (cluster.isMaster) {
    for (i = 0; i < 6; i++) {
        cluster.fork();
    }
    cluster.on("online", function (worker) {
        console.log("Worker is forked");
    });

    cluster.on("fork", function (worker) {
        console.log("Starting to fork");
    })
}