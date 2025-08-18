const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
         default:""
    },
    claps:{
         type:Number,
         default:0
    },
    content:{
        type:String,
        required:true
    },
   
},{timestamps:true});

//! convert schema to model
const Post = mongoose.model("Post",PostSchema);

module.exports = Post;
