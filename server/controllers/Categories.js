const { Categories } = require("../models");

class CategoriesController {
    static async getAll(req, res) {
        try {
            const result = await Categories.findAll({
                order: [
                    [
                        "id", "asc" // berurutan
                    ]
                ],
            });
            res.status(200).json(result);
        } catch (err) {
            console.log(`errror: ${err}`);
            res.status(500).json(err);
        }
    }


    static async create(req, res) {
        try {
            const { name, image } = req.body;
            const result = await Categories.create({
                name,
                image
            })

            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id; // + untuk convert string ke number
            const result = await Categories.destroy({
                where: { id }
            })

            res.send

            result === 1 // done
                ? res.status(200).json({
                    message: `Category id: ${id} has been Deleted!`
                })
                : res.status(404).json({
                    message: `Category id: ${id} not found!`
                })
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.id;
            const { name, image } = req.body;
            const result = await Categories.update({
                name,
                image
            },
                {
                    where: { id }
                }
            )

            result[0] === 1
                ? res.status(200).json({
                    message: `Category id: ${id} has been Updated!`
                })
                : res.status(404).json({
                    message: `Category id: ${id} not found!`
                })

        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = CategoriesController

