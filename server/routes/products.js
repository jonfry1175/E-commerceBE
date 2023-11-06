const productRoutes = require('express').Router();
const { ProductController } = require('../controllers/')

productRoutes.get('/', ProductController.getProducts)
productRoutes.get('/create', ProductController.create)
productRoutes.get('/delete', ProductController.delete)
productRoutes.get('/update', ProductController.update)


module.exports = productRoutes;