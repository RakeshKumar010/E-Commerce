import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const UpdateProduct = () => {
    const[name,setName]=useState();
    const[price,setPrice]=useState();
    const[category,setCategory]=useState();
    const[company,setCompany]=useState();

    const params = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        updateData()
        // console.log(params.id)
    },[])

    const updateData = async() =>{
        let result = await fetch(`http://localhost:8080/${params.id}`)
        result = await result.json()
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }
const submitFun = async(e) =>{
    e.preventDefault()
    let result = await fetch(`http://localhost:8080/${params.id}`,{
        method:'put',
        body:JSON.stringify({name,price,category,company}),
        headers:{'content-type':'application/json'} 
    })
    result = await result.json()
    console.log(result)
    navigate('/')

}

    return (
        <div className='.addproducts'>
            <form onSubmit={submitFun}>
                <input type="text" placeholder='Enter the name' onChange={(e)=>{
                    let value= e.target.value
                    setName(value)
                }} name='name' value={name} required />
                <input type="number" placeholder='Enter the price' onChange={(e)=>{
                    let value= e.target.value
                    setPrice(value)
                }} name='price' value={price} required />
                <input type="text" placeholder='Enter the category' onChange={(e)=>{
                    let value= e.target.value
                    setCategory(value)
                }} name='category' value={category}  required />
               
                <input type="text" placeholder='Enter the company' onChange={(e)=>{
                    let value= e.target.value
                    setCompany(value)
                }} name='company' value={company} required />
                <button>Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProduct