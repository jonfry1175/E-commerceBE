const categoryRoutes = require('express').Router();
const { CategoriesController } = require('../controllers/')

categoryRoutes.get('/', CategoriesController.getCategories)
categoryRoutes.get('/create', CategoriesController.create)
categoryRoutes.get('/delete', CategoriesController.delete)
categoryRoutes.get('/update', CategoriesController.update)

module.exports = categoryRoutes;