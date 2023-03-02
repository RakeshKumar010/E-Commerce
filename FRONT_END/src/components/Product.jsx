import React, { useEffect, useState } from 'react'
import './Product.css'
import {useNavigate,Link} from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()

    const[productlist,setProductlist] = useState()
    const[naam,setName] = useState()
    useEffect(()=>{
        getFun()
    },[])
    const getFun=async()=>{
        let result = await fetch('http://localhost:8080',{
            method:"get",
            headers:{'content-type':'application/json'}
        })
        result = await result.json()
        setProductlist(result)
    }
  
   
    const deleteFun = async(id)=>{
        let result = await fetch(`http://localhost:8080/${id}`,{
            method:"delete",
            headers:{'content-type':'application/json'}
        })
        result = await result.json()
        getFun()

       
    }

  return (
    <>
    {/* <div className="search" style={{margin:'10px 0px 0px 0px'}}>
       
        <input type="text" style={{margin:'0 0 0 45vw'}} name='name' onChange={async(e)=>{
            let key = e.target.value;
            let result = await fetch(`http://localhost:8080/search/${key}`)
            setName(result)
        }}/>

        </div> */}
    <div className='mainproduct'>
        <div className="productList">
       <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Oprations</li>
     
       </ul>
       
       {
       productlist && productlist.map((val,index)=>{
                return  <ul key={val._id}>
                <li>{index}</li>
                <li>{val.name}</li>
                <li>${val.price}</li>
                <li>{val.category}</li>
                <li className='opration'>
                    <button onClick={()=>deleteFun(val._id)}>Delete</button>
                <Link className='updatebtn' to={'/Update/'+val._id}>Update</Link>

                </li>
               
             
               </ul>
            })
            }
        </div>
    </div> 
    </>
  )
}

export default Product