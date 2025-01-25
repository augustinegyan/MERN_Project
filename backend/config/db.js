require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('MongoDB connected Successfully');

    }catch(error){
        console.error('MongoDB connection failed', error);
        process.exit(1);

    }
}

module.exports = connectDB; 
