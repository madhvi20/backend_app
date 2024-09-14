const express = require('express');
const { addProduct } = require('../controllers/sellerController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/products', authMiddleware, addProduct);

module.exports = router;
