const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const productCatorycontroller = require('../controllers/productCategoryController')

/* PRODUCTS */
/* GET all product listing. */
router.get('/', productController.getProducts, function(req, res, next) {
  res.json(res.products)
});
/* GET one product by id */
router.get('/product', productController.getProduct, function(req, res, next) {
  res.status(200).json(res.product)
});
/* POST product */
router.post('/product', productController.postProduct, (req, res, next)=>{
  res.status(201).json(res.newProduct)
})
/* PATCH Product */
router.patch('/product', productController.patchProduct, (req, res, next)=>{
  res.status(200).json(res.updatedProduct);
})
/* DELETE product */
router.delete('/product', productController.deleteProduct, (req, res, next)=>{
  res.status(200).json('Product deleted')
})
/* END OF PRODUCTS */


/* PRODUCT CATEGORIES */
/* Get One category by id */
router.get('/categories/category', productCatorycontroller.getProductCategory,(req, res, next)=>{
  res.status(200).json(res.productCategory)
} )
/* GET all product categories */
router.get('/categories', productCatorycontroller.getProductCategories, (req, res, next)=>{
  res.status(200).json(res.productCategories)
})
/* POST new product category */
router.post('/categories/category', productCatorycontroller.postProductCategory, (req, res, next)=>{
  res.status(201).json(res.newProductCategory)
})
/* PATCH update product category */
router.patch('/categories/category', productCatorycontroller.patchProductCatory, (req, res, next) =>{
  res.status(200).json(res.updatedProductCategory)
})

/* DELETE product category */
router.delete('/categories/category', productCatorycontroller.deleteProductCategory, (req, res, next)=>{
  res.status(204).json(res.deletedProductCategory)
})


/* END OF PRODUCT CATEGORIES */
module.exports = router;