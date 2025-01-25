const express = require('express');
const app = express();
const connectToDb = require('./config/db')
const Product = require('./models/product')
const mongoose = require('mongoose')

//middleware 
app.use(express.json());


app.get('/api/products',async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true, 
            data: products
        })
    } catch (error) {
        console.log('error fetching products',error.message);
        res.status(500).json({success:false, message:'Server error '})
    }
})

app.post('/api/products',async (req,res)=>{
    const product = req.body;
    if(!product.name|| !product.price || !product.image){
        return res.status(400).json({
            success: false,
            message: 'Please provide all fields'
        })
    }
    const newProduct =  new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    } catch (error) {
        console.log('Error in creating product',error)
        res.status(500).json({
            success: true, 
            message: 'Server Error'
        })
    }
})
app.delete('/api/products/:id',async (req,res)=>{
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true, 
            message: 'Product deleted'
        })
    } catch (error) {
        res.status(500).json({success:false,message:"could not delet"})
    }
})

app.put('/api/products/:id',async (req,res)=>{
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
})

app.listen(9000,()=>{
    connectToDb();
    console.log('Server running at PORT 5000')
} )