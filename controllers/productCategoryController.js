const mongoose = require('mongoose')
const ProductCategory = require('../models/productCategory')


module.exports = {
  getProductCategory: async (req, res, next) => {
    try {
      const productCategory = await ProductCategory.find({_id:req.body.id});
      res.productCategory = productCategory
      next()
    } catch (error) {
      res.json(error);
    }
  },
  getProductCategories: async (req, res, next) => {
    try {
      const productCategories = await ProductCategory.find({});
      res.productCategories = productCategories
      next()
    } catch (error) {
      res.json(error);
    }
  },
  postProductCategory: async (req, res, next) => {
    try {
      let productCategory = new ProductCategory({
        name: req.body.name,
        description: req.body.description,
        parentCategory: req.body.category
      })
      const newProductCategory = await productCategory.save();
      res.newProductCategory = newProductCategory;
      next()
    } catch (error) {
      res.json(error)
    }
  },
  deleteProductCategory: async (req, res, next)=>{
    try {
      let deletedProductCategory = await ProductCategory.deleteOne({_id:req.body.id})
      res.deletedProductCategory = deletedProductCategory
      next()
    } catch (error) {
      res.status().json(error);
    }
  },
  patchProductCatory: async (req, res, next)=>{
    try {
      let updatedProductCategory = await ProductCategory.findOneAndUpdate({_id: req.body.id}, {
        name:req.body.name,
        description: req.body.description,
        parentCategory:req.body.category
      },{returnDocument: 'after'})
      res.updatedProductCategory = updatedProductCategory
      next()
    } catch (error) {
      res.json(error);
    }
  }
}