const userRoutes = require('express').Router();
const { UserController } = require('../controllers/')


userRoutes.get('/', UserController.getAll)
userRoutes.post('/create', UserController.create)
userRoutes.delete('/delete/:id', UserController.delete)
userRoutes.put('/update/:id', UserController.update)

module.exports = userRoutes;