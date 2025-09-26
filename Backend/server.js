const express = require('express')
const dotenv = require('dotenv')
const usersRouter = require("./routes/users/userRoutes")

//! Create an express application
const app = express();

//! load the environment variable
dotenv.config();

//? setup the Router 
app.use("/",usersRouter)

const PORT = process.env.PORT || 9080
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})
