const { index, insertProduct} = require('../controllers/ProductController')
const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer({dest:'uploads/'})

router.get('/', index)

router.post('/insert/',upload.single('productImage'), insertProduct)

module.exports = router;