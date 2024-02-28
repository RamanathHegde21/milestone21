const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/place-order', orderController.placeOrder);

module.exports = router;
