var assert = require('assert');
var expect = require('expect.js');

it('should equal', function () {
    assert.equal(20, 20);
    expect({ a: 'b' }).to.eql({ a: 'b' });
});


