import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Addproduct = () => {
    const[val, setVal]= useState({
        name:"",
        price:"",
        category:"",
        userId:"",
        company:""
    })
    const navigate = useNavigate()
    const changeFun = (e) =>{
        const{name,value}= e.target;
        setVal((obj)=>{
            return{
                ...obj,
                [name]:value
            }
        })
    }
    const submitFun =async (e) =>{
        e.preventDefault()
        let result = await fetch('http://localhost:8080/addproduct',{
            method:"post",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({...val})

        })
        result= await result.json()
        if(result){
            navigate('/')
            // console.log(result)

        }
            localStorage.setItem('addProduct',JSON.stringify(result))

    }
  return (
    <div className='.addproducts'>
        <form onSubmit={submitFun} >
         
            <input type="text" placeholder='Enter the name' onChange={changeFun} name='name' required/>
            <input type="number" placeholder='Enter the price' onChange={changeFun} name='price' required/>
            <input type="text" placeholder='Enter the category' onChange={changeFun} name='category' required/>
            <input type="text" placeholder='Enter the userId' onChange={changeFun} name='userId' required/>
            <input type="text" placeholder='Enter the company' onChange={changeFun} name='company' required/>
            <button>Add Product</button>
        </form>
    </div>
  )
}

export default Addproduct