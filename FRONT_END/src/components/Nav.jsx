import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css'
import LOGO from './assets/home.png'
//C:\Users\Rakesh Kumar\Documents\E-dashbord\FRONT_END\src\components\assets\home.png
const Nav = () => {
    const auth = localStorage.getItem('Users')
    const authObj = JSON.parse(auth)
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.clear('Users')
        navigate('/SignUp')
    }

    return (
        <div className='main'>
            <img src={LOGO} alt="Logo" />
            <ul className='nav'>

                {
                    auth ?
                        <>
                           
                            <li>
                                <Link to='/'>Product</Link>
                            </li>
                            <li>
                                <Link to='/AddProduct'>Add Product</Link>
                            </li>
                            <li>
                                <Link to='/Update'>Update Product</Link>
                            </li>


                            <li>
                                <Link to='/Profile'>Profile</Link>
                            </li>
                            <li><Link to='/SignUp' onClick={Logout}>Logout</Link></li>
                            <li><Link to='/name'>{authObj.Name}</Link></li>
                        </> :

                        <>
                            <li> <Link to='/SignUp'>SignUp</Link></li>
                            <li><Link to='/LogIn'>LogIn</Link></li>
                          </>

                }





            </ul>
        </div>
    )
}

export default Nav




{/* <li>

{auth ? <Link to='/SignUp' onClick={Logout}>Logout</Link> : <Link to='/SignUp'>SignUp</Link>}
</li>


<li>

{auth ? <Link to='/name'>{authObj.Name}</Link> : <Link to='/LogIn'>LogIn</Link>}
</li> */}