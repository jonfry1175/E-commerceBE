const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
})

const brandRoutes = require('./brands')
const categoryRoutes = require('./categories')
const productRoutes = require('./products');
const userRoutes = require('./users');

router.use('/brands', brandRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);

module.exports = router;