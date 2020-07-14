const mongoose = require('mongoose');
require('dotenv').config()


//SCHEMA
const Schema = mongoose.Schema;

const Comments =  new Schema({
    person     : String,
    comment    : String,
    created_at : Date
});

const Post = new Schema({
    author     : String,
    title      : String,
    body       : String,
    date       : { type: Date, default: Date.now },
    comments   : [Comments]
});

//MODEL
const BlogPost = mongoose.model('BlogPost', Post);

module.exports = BlogPost;