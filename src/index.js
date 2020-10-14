module.exports = function reverse (n) {
    let output = 0;
    n = n < 0 ? n * -1: n;
    while (n != 0) {
        output *= 10;
        output += (n % 10);
        n = (n - (n % 10)) / 10
    }
    return output;
}
