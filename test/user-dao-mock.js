

function UserDAO() {

    this.getUserById = function (id) {
        return {id:1, name:"anthony"};
    }

}

module.exports = {
    UserDAO: UserDAO
};