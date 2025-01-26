const express = require('express');
const router = express.Router(); 
const {getAllProducts,updateById,deleteProducts,postProducts} = require('../controller/productController')


router.get('/',getAllProducts);

router.post('/',updateById);
router.delete('/:id',deleteProducts);

router.put('/:id',postProducts);

module.exports = router;

