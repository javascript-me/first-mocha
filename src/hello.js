function Hello() {

    this.count = 0;

    this.add = function (input) {

        if (input > 0)
        {
            console.log("Positive! ");
        }
        else
        {
            console.log("Negative! ");
        }

        this.count += input;
    }
}

module.exports = {
    Hello: Hello
};