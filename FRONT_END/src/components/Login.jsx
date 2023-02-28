import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import('./Login.css')
const Login = () => {
    const[val,setVal] =useState({
        Email:"",
        Password:""
    })
    const navigate = useNavigate()
    const changeFun = (e)=>{
   
        const { name, value } = e.target;

        setVal((obj)=>{
            return({
                ...obj,
                [name]:value
            })
        })

    }
    useEffect(() => {
    const auth = localStorage.getItem('Users')

        if (auth) {
            navigate('/')
        }

    },[])
    const submitFun =async (e)=>{
        e.preventDefault();
        let result = await fetch('http://localhost:8080/login',{
            method:'post',
            body:JSON.stringify({...val}),
            headers:{'content-type':'application/json'}
        })
        result = await result.json()
        if(result.Name){
            navigate('/')
       localStorage.setItem("Users", JSON.stringify(result));

        }else{
            alert('Plese enter correct details')

        }
       

      
    }
  return (
    <div className='login'>
        <form onSubmit={submitFun}>
            <input type="email" placeholder='Enter the email' name='Email'  onChange={changeFun} required/>
            <input type="password" placeholder='Enter the password' name='Password' onChange={changeFun} required/>
            <button>LOG IN</button>
        </form>
    </div>
  )
}

export default Login