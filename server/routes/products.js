const productRoutes = require('express').Router();
const { ProductController } = require('../controllers/')

productRoutes.get('/', ProductController.getAll)
productRoutes.post('/create', ProductController.create)
productRoutes.delete('/delete/:id', ProductController.delete)
productRoutes.put('/update/:id', ProductController.update)


module.exports = productRoutes;