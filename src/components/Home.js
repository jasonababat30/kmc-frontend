import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='home-page bg-blue-500'>
            <h1>WELCOME TO PHONEBOOK</h1>
            <button className='signin-button bg-blue-300' onClick={() => {
                navigate('/sign-in')
            }}>Sign In</button>
            <button className='signup-button bg-green-300'>Sign Up</button>
        </div>
    )
}

export default Home