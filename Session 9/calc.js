
exports.add = (a, b) => {
    if (a < 0 || b < 0) {
        return 0;
    }
    return a + b;
}

exports.sub = (a, b) => {
    return a - b;
}

exports.div = (a, b) => {
    return a / b;
}

exports.mul = (a, b) => {
    return a * b;
}