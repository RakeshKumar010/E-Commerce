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
app.get('/',async(req,res)=>{
    let products = await productSchema.find()
    if(products.length>0){
    res.send(products)

    }else{
        res.send({'result':"not found"})
    }
    

})
app.delete('/:id',async(req,res)=>{
    let deleteProduct = await productSchema.deleteOne({_id:req.params.id})
    res.send(deleteProduct);
})
app.get('/:id',async(req,res)=>{
    let getProduct = await productSchema.findOne({_id:req.params.id})
    res.send(getProduct); 
})

app.put('/:id',async(req,res)=>{
    let updateProduct= await productSchema.updateOne({_id:req.params.id},{$set:req.body})
    res.send(updateProduct)
})

// app.get('/search/:key',async(req,res)=>{
//     let findProduct = await productSchema.find({
//        "$or":[
//             {name:{$regex:req.params.name}},
//             {company:{$regex:req.params.company}},
//             {category:{$regex:req.params.category}}
//         ]
//     })
//     res.send(findProduct)
// })



app.listen(PORT, () => {
    console.log('Server is open at localhost:8080')
})