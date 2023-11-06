class BrandController {
    static getBrands(req, res) {
        res.send('Brands Page!');
    }

    static create(req, res) {
        res.send('Create Brand Page!');
    }

    static delete(req, res) {
        res.send('Delete Brand Page!');
    }

    static update(req, res) {
        res.send('Update Brand Page!');
    }
}

module.exports = BrandController