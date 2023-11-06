class ProductController {
    static getProducts(req, res) {
        res.send('Products Page!');
    }

    static create(req, res) {
        res.send('Create Product Page!');
    }

    static delete(req, res) {
        res.send('Delete Product Page!');
    }

    static update(req, res) {
        res.send('Update Product Page!');
    }
}

module.exports = ProductController