function Hello() {

    this.count = 0;

    this.add = function (input) {
        this.count += input;
    }
}

module.exports = {
    Hello: Hello
};