require('./connection')
const userSchema = require('./user')
const productSchema = require('./product')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const PORT = 8080;
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.post('/register', async (req, res) => {
    let result = await userSchema.insertMany(req.body)
    result = result[0].toObject();
    
    delete result.Password; 
    res.send(result)
})
app.post('/login', async (req, res) => {
    if (req.body.Email && req.body.Password) {
        let result = await userSchema.findOne(req.body).select('-Password')
        if (result) {
            res.send(result)
            console.log(result)
        } else {
            res.send({ 'Rueslt': 'no user fonud' })
        }
    }else{
        res.send({'Rueslt': 'no user fonud'})
    }

})
app.post('/addproduct',async(req,res)=>{
    let result = new productSchema(req.body)
    result= await result.save()
    if (result) {
        res.send(result)
      
    } else {
        res.send({ 'Rueslt': 'no user fonud' })
    }
   
})
app.get('/product',async(req,res)=>{
    let products = await productSchema.find().select('-_id')
    if(products.length>0){
    res.send(products)

    }else{
        res.send({'result':"not found"})
    }
})

app.listen(PORT, () => {
    console.log('Server is open at localhost:8080')
})