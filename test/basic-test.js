var assert = require('chai').assert;
var Hello = require("./../src/hello.js").Hello;

describe("Array", function() {
    describe("#indexOf()", function() {
        it("should return -1 when the value is not present", function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

describe("Usage of bind()", function () {
    var hello = new Hello();
    it("should bind the host and the method signature parameter", function () {
        assert.equal(0, hello.count);
        hello.add(2);
        assert.equal(2, hello.count);
        hello.add.bind(hello, 3)();
        assert.equal(5, hello.count);
    });
});

it("should bind the host and the method signature parameter", function () {
    assert.equal(1, 1);
});

it("Math.ramdon()", function () {
    assert.ok(0 <= Math.random() && Math.random() <= 1);
});

it("Should do escape", function () {
    var input = "<div></div>";
    assert.equal(escape(input), "%3Cdiv%3E%3C/div%3E");
    assert.equal(unescape(escape(input)), input);
});
