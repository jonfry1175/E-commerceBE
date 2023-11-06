const userRoutes = require('express').Router();
const { UserController } = require('../controllers/')


userRoutes.get('/', UserController.getUsers)
userRoutes.get('/create', UserController.create)
userRoutes.get('/delete', UserController.delete)
userRoutes.get('/update', UserController.update)

module.exports = userRoutes;