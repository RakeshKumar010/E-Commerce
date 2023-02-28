const mongoose = require('mongoose')

module.exports= mongoose.model('e-com-collection',mongoose.Schema({
    Name:{
        type:String,
        uppercase:true
    },
    Email:String,
    Password:String,
    

}))