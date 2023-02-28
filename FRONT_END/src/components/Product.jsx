import React, { useEffect, useState } from 'react'
import './Product.css'
const Product = () => {
    const[productlist,setProductlist] = useState()
    useEffect(()=>{
        getFun()
    },[])
    const getFun=async()=>{
        let result = await fetch('http://localhost:8080/product',{
            method:"get",
            headers:{'contect-type':'application/json'}
        })
        result = await result.json()
        setProductlist(result)
    }
    // console.log(productlist)

  return (
    <div className='mainproduct'>
        <div className="productList">
       <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
     
       </ul>
       
       {productlist && productlist.map((val,index)=>{
                return  <ul>
                <li>{index}</li>
                <li>{val.name}</li>
                <li>${val.price}</li>
                <li>{val.category}</li>
             
               </ul>
            })}
       
           
        
        </div>
    </div> 
  )
}

export default Product