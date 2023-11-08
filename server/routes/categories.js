const categoryRoutes = require('express').Router();
const { CategoriesController } = require('../controllers/')

categoryRoutes.get('/', CategoriesController.getAll)
categoryRoutes.post('/create', CategoriesController.create)
categoryRoutes.delete('/delete/:id', CategoriesController.delete)
categoryRoutes.put('/update/:id', CategoriesController.update)

module.exports = categoryRoutes;