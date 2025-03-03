import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function Signup() {
    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("")
    const {signUp,signIn,logout,user} = UserAuth()
    const navigate = useNavigate()


console.log(signUp)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            await signUp(email,password)
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }

  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover'  src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"/>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    <input onChange={(e)=>  { 
                        setEmail(e.target.value)
                        console.log(email); }  } className='p-3 my-2 border border-gray-600 bg-transparent backdrop-blur-sm rounded' type='email' placeholder='Email' autoComplete='email'/>
                    <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 border border-gray-600 bg-transparent backdrop-blur-sm rounded' type='password' placeholder='Password' autoComplete='current-password'/>
                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Signup</button>
                    <div className='flex justify-between items-center text-sm text-gray-600'>
                        <p>
                            <input className='mr-2' type='checkbox'/>
                            Remember me
                        </p>
                        <p>Need Help?</p>
                    </div >
                    <p className='py-8'>
                        <span className='text-gray-600'>
                            Already subscribed to Netflix?
                        </span>{" "}
                        <Link to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
        </div>
    </div> 
    </>
  )
}

export default Signup