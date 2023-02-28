const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/e-com',(err)=>{
    if(err){
        console.log(`Database is not connect :-${err}`)

    }else{
        console.log('Database is succesfully connected')
    }
})