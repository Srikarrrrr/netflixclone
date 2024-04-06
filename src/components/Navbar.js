import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
const Navbar = () => {
  const {signUp,signIn,logout,user}= UserAuth()
  const navigate = useNavigate()
  //console.log(user.email)

  const handleLogout = async ()=> {
    try{
      await logout();
      navigate('/')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
       <Link to="/">
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        </Link>
        {
          user
          
          ?
            <div>
        <Link to="/accounts">
            <button className='text-white pr-4'>Account</button>
        </Link>

            <button onClick={handleLogout} className='text-white rounded bg-red-600 px-6 py-2'>Logout</button>
        
        
        </div>
        :
        <div>
        <Link to="/signup">
            <button className='text-white pr-4'>Sign Up</button>
        </Link>
        <Link to="/login">
            <button className='text-white rounded bg-red-600 px-6 py-2'>Sign In</button>
        </Link>
        
        </div>
          
        }
        


    </div>
  )
}

export default Navbar