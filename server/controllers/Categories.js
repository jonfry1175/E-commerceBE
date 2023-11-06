class CategoriesController {
    static getCategories(req, res) {
        res.send('Categoriess Page!');
    }

    static create(req, res) {
        res.send('Create Categories Page!');
    }

    static delete(req, res) {
        res.send('Delete Categories Page!');
    }

    static update(req, res) {
        res.send('Update Categories Page!');
    }
}

module.exports = CategoriesController