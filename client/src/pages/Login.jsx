import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type='text' placeholder='username'></input>
                <input type='password' placeholder='password'></input>
                <button>Login</button>
                <p>This an error!</p>
                <span>Don't you have an account?<Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login
