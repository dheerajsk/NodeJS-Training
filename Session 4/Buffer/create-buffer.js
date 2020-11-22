
// const buffer = new Buffer.alloc(256);

// const length = buffer.write("This is a test buffer");

// console.log(length);

const buffer2 = new Buffer.alloc(26);

for (var i = 0; i < 26; i++) {
    buffer2[i] = i + 97;
}
console.log(buffer2.toString());
console.log(buffer2.toString('ascii', 0, 5));