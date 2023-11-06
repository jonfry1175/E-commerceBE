class UserController {
    static getUsers(req, res) {
        res.send('Users Page!');
    }

    static create(req, res) {
        res.send('Create User Page!');
    }

    static delete(req, res) {
        res.send('Delete User Page!');
    }

    static update(req, res) {
        res.send('Update User Page!');
    }
}

module.exports = UserController