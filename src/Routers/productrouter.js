const express = require('express');
const productcontroller = require('../Controllers/productcontroller');
const router = express.Router();

router.post('/createproduct', productcontroller.createProduct);
router.get('/listproduct/:restaurantId',productcontroller.listProduct);
router.put('/updateproduct/:productId',productcontroller.updateProduct);
router.put('/disableproduct/:restaurantId',productcontroller.disableProduct);
router.put('/enableproduct/:restaurantId',productcontroller.enableProduct);

module.exports = router;
