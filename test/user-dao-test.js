var assert = require("assert");
var UserDAO = require("./user-dao-mock.js").UserDAO;

it("should return some users", function () {

    var userDao = new UserDAO();
    var user = userDao.getUserById(10);

    assert.equal(1, user.id);
    assert.equal("anthony", user.name);

})