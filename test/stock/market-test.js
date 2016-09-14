var assert = require("assert");

var events = require('events').EventEmitter;
var util = require('util');

var myhttp = function () {

    var _this = this;

    // events.call(this);

    this.get = function (options, cb) {
        cb(_this);
        return _this;
    };

};

util.inherits(myhttp, events);

it("should call service with data successfully", function (done) {
    var http = new myhttp();

    var Market = require('../../src/stock/market.js');
    Market.getPrice("yahoo", function (error, data) {
        assert.equal(10, data);
        assert.equal(null, error);
        done();
    }, http);

    http.emit('data', 10);
    assert.equal(-1, [1,2,3].indexOf(4));
});

it("should call service with error", function (done) {
    var http = new myhttp();

    var Market = require('../../src/stock/market.js');

    Market.getPrice("yahoo", function (error, data) {
        assert.equal(undefined, data);
        assert.equal("something must be wrong! ", error);
        done();
    }, http);

    http.emit('error', {message: "something must be wrong! "});

    assert.equal(-1, [1,2,3].indexOf(4));
});
