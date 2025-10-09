const express = require('express')
const dotenv = require('dotenv')
const usersRouter = require("./routes/users/userRoutes")
const connectDB = require("./config/db");

//! Create an express application
const app = express();

//! load the environment variable
dotenv.config();

//! Establish connection to MongoDB;
connectDB();

//! Set up the middleware
app.use(express.json())


// app.get("/",(req,res)=>{
//     res.send("hello")
// })

//? setup the Router 
app.use("/",usersRouter)

const PORT = process.env.PORT || 9080
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})
