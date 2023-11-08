const brandRoutes = require('express').Router();
const { BrandController } = require('../controllers/')

brandRoutes.get('/', BrandController.getAll)
brandRoutes.post('/create', BrandController.create)
brandRoutes.delete('/delete/:id', BrandController.delete)
brandRoutes.put('/update/:id', BrandController.update)

module.exports = brandRoutes;