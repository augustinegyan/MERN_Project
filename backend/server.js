const express = require('express');
const app = express();
const connectToDb = require('./config/db')
const productRoutes = require('./routes/productroutes')
require('dotenv').config();


//middleware 
app.use(express.json());
app.use('/api/products',productRoutes)

const PORT = process.env.PORT ;




app.listen(PORT,()=>{
    connectToDb();
    console.log(`Running on Port :${PORT}`)
} )