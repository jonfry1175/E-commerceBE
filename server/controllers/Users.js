const { Users } = require('../models')

class UserController {
    static async getAll(req, res) {
        try {
            const result = await Users.findAll({
                order: [
                    [
                        "id", "asc" // berurutan
                    ],
                ],
            });
            res.status(200).json(result);
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
    }

    static async create(req, res) {
        try {
            const { username, email, password } = req.body;
            const result = await Users.create({
                username,
                email,
                password
            })
            res.status(201).json((result))
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id;
            const result = await Users.destroy({
                where: { id }
            })
            result === 1 // done
                ? res.status(200).json({
                    message: `User id: ${id} has been Deleted!`
                })
                : res.status(404).json({
                    message: `User id: ${id} not found!`
                })
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { username, email, password } = req.body;
            const result = await Users.update({
                username,
                email,
                password
            }, 
            {
                where: { id }
            })

            result[0] === 1
                ? res.status(200).json({
                    message: `User id: ${id} has been Updated!`
                })
                : res.status(404).json({
                    message: `User id: ${id} not found!`
                })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = UserController