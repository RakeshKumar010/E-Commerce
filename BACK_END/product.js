const mongoose = require('mongoose')

module.exports = mongoose.model('addproducts-Collection',mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    userId:String,
    company:String
}))