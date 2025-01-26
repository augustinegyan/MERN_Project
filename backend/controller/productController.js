const Product = require('../models/product')
const mongoose = require('mongoose')


const getAllProducts = async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true, 
            data: products
        });
    } catch (error) {
        console.log('error fetching products',error.message);
        res.status(500).json({success:false, message:'Server error '})
    }
}

const updateById = async (req,res)=>{
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:'Invalid Product Id'})
    }
    try {
       const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
       res.status(200).json({success:true, data: updatedProduct})
    } catch (error) {
        res.status(400).json({
            success: false, 
            message: 'Server Error'
        })
    }
}

const deleteProducts = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:'Invalid Product Id'})
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true, 
            message: 'Product deleted'
        })
    } catch (error) {
        res.status(500).json({success:false,message:"could not delet"})
    }
}

const postProducts = async (req,res)=>{
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:'Invalid Product Id'})
    }
    try {
       const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
       res.status(200).json({success:true, data: updatedProduct})
    } catch (error) {
        res.status(400).json({
            success: false, 
            message: 'Server Error'
        })
    }
}

module.exports = {getAllProducts,updateById,deleteProducts,postProducts}