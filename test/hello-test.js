var assert = require("assert");
var Hello = require('./../src/hello.js').Hello;

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

describe('Usage of bind()', function () {
    var hello = new Hello();
    it('should bind the host and the method signature parameter', function () {
        assert.equal(0, hello.count);
        hello.add(2);
        assert.equal(2, hello.count);
        hello.add.bind(hello, 3)();
        assert.equal(5, hello.count);
    });
});

it('should bind the host and the method signature parameter', function () {
    assert.equal(1, 1);
});