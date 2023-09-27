import React, { useState } from 'react'
import bg from '../assets/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg'
import { Link,useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const Signup = () => {
  const navigate =useNavigate()
  const {user,signUp}= UserAuth()
  const [password,setPassword]=useState('')
  const [email ,setEmail]= useState('')


  const HandleSubmit= async (e)=>{
    e.preventDefault() 
    try{
      await signUp(email,password) 
      navigate('/')
    }
    catch (error){
      console.log(error)
    }

  }


  return (
    <>
    <div className='w-full h-screen'>
    <img className='hidden sm:block absolute w-full h-full object-cover' src={bg} alt="background" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
    <div className='fixed w-full px-4 py-24 z-50'>

    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white ' >
    <div className='max-w-[320px] mx-auto py-16' > 
    <h1 className='text-3xl font-light'>Sign Up</h1>
    <form onSubmit={HandleSubmit} className=' w-full flex flex-col py-4'>
<input  onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-900 rounded' type="text" placeholder='Email' />
<input  onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-900 rounded' type="password" placeholder='Password' />
<button className='font-medium bg-red-600 py-3 my-6 rounded'>Sign up</button>
<div className='flex justify-between items-center text-sm text-gray-600 '>
  <p>
  <input className='mr-2 ' type="checkbox" />
  Remember me</p>
  <p>Need Help?</p>
</div>
<p className='py-4 px-2'><span className='text-gray-600 mr-3'> Already subscribed to Nextflix</span>
<Link to='/login'>
Sign In
</Link>  </p>
    </form>
    </div>
    
    </div>

    </div>
    
    </div>

    </>
  )
}

export default Signup