import React, { useEffect, useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem('Users')

    const [val, setVal] = useState({
        Name: '',
        Email: '',
        Password: ''
        
    })
    useEffect(() => {
        if (auth) {
            navigate('/')
        }

    },[])
    const changeFun = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;

        const { name, value } = e.target;
        setVal((obj) => {
            return {
                ...obj,
                [name]: value
            }
        })
    }
    const submitFun = async (e) => {
        e.preventDefault()
        let result = await fetch('http://localhost:8080/register', {
            method: 'post',
            body: JSON.stringify({ ...val }),
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json()

        if (result) {
            navigate('/')
        }
        localStorage.setItem("Users", JSON.stringify(result));


    }
    return (
        <div className='signup'>
            <form onSubmit={submitFun} >

                <input placeholder='Enter your name' name='Name' value={val.Name} type="text" onChange={changeFun} required />
                <br />
                <input placeholder='Enter your email' name='Email' value={val.Email} type="email" onChange={changeFun} required />
                <br />
                <input placeholder='Enter your password' name='Password' value={val.Password} type="password" onChange={changeFun} required  />
                <br />

                <button>SIGN UP</button>

            </form>
        </div>
    )
}

export default SignUp