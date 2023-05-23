const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryProductsController')

/* Get all inventory products */
router.get('/', inventoryController.getAllInventory, (req, res, next)=>{
  res.status(200).json(res.products)
})
/* POST new inventory product */
router.post('/product', inventoryController.postProduct, (req, res, next)=>{
  res.status(201).json(res.createdProduct)
})
/* DELETE Product from inventory */
router.delete('/product', inventoryController.deleteProduct, (req, res, next)=>{
  res.status(200).json(res.deleteInventory)
})
/* UPDATE a product in inventory */
router.patch('/product', inventoryController.patchProduct, (req, res, next)=>{
  res.status(200).json(res.updatedProduct)
})

module.exports = router