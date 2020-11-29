
const child_process = require("child_process");

for (var i = 0; i < 3; i++) {
    const newChildProcess = child_process.exec('node child_command hello ' + i, function (error, stdout, stderr) {
        if (error) {
            console.log('Error has occured');
            console.log(error.stack);
            console.log(error.name);
            console.log(error.code);
        }
        console.log('stdout: ' + stdout);
        console.log('stdout: ' + stderr);
    });

    newChildProcess.on('exit', function (code) {
        console.log('Child process exit with code: ' + code);
    });
}