const { Products } = require("../models");

class ProductController {
    static async getAll(req, res) {
        try {
            const result = await Products.findAll({
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
            const { name, price, stock, image } = req.body;
            const result = await Products.create({
                name,
                price,
                stock,
                image
            })

            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            const result = await Products.destroy({
                where: { id }
            })

            result === 1 // done
                ? res.status(200).json({
                    message: `Product id: ${id} has been Deleted!`
                })
                : res.status(404).json({
                    message: `Product id: ${id} not found!`
                })
        } catch (err) {
            res.status(500).json(`error: ${err}`);
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { name, price, stock, image } = req.body;
            const result = await Products.update({
                name,
                price,
                stock,
                image
            },
                {
                    where: {
                        id
                    }
                })

            result[0] === 1
                ? res.status(200).json({
                    message: `Product id: ${id} has been Updated!`
                })
                : res.status(404).json({
                    message: `Product id: ${id} not found!`
                })

        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = ProductController

