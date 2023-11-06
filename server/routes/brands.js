const brandRoutes = require('express').Router();
const {BrandController} = require('../controllers/')

brandRoutes.get('/', BrandController.getBrands)
brandRoutes.get('/create', BrandController.create)
brandRoutes.get('/delete', BrandController.delete)
brandRoutes.get('/update', BrandController.update)

module.exports = brandRoutes;