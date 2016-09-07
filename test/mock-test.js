var expect = require('expect.js');

it('should equal', function () {
    expect({ a: 'b' }).to.eql({ a: 'b' });
    expect(1).to.be(1);
    expect(NaN).not.to.equal(NaN);
    expect(1).not.to.be(true);
    expect('1').to.not.be(1);
});
