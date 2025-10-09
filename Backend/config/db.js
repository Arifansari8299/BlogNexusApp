const mongoose = require("mongoose")
const connectDB = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/blogNexus");
        console.log("MongoDB Connected!")
    }
    catch(err){
        console.log("Connection to MongoDB failed:", err.message)
    }
}
module.exports = connectDB;