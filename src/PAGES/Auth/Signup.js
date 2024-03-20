import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './AuthPage.css'

function Signup() {
  return (
    <div className='authpage'>
        <Navbar reloadnavbar={false}/>

        <div className='authcont'>
            <img src='https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60' alt='signup' />
        
            <form className='authform'>
                <h1>Signup</h1>
                <div className='formgroup'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email'/>
                </div>

                <div className='form-group-row'>
                <div className='formgroup'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password'/>
                </div>
                <div className='formgroup'>
                    <label htmlFor='cpassword'>Confirm Password</label>
                    <input type='password' id='cpassword'/>
                </div>
                </div>

                <Link to='/forgotpassword'
                    className='stylenone'>
                    <p>Forgot Password?</p>
                </Link>
                <Link to='/' className='stylenone'>
                    <button className='btn'>Login</button>
                </Link>
                <h2 className='or'>OR</h2>
                <Link to='/signup' className='stylenone'>
                    <button className='btn'>Signup</button>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default Signup