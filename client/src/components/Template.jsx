import React from 'react'
import GoogleButton from 'react-google-button'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import { FcGoogle } from "react-icons/fc";

const Template = ({title,desc1,desc2,image,fromtype,setisloggedIn}) => {
  return (
    <div className='flex justify-center items-center max-w-[1160px] mx-auto border rounded-md mt-10'>
        <div className='w-11/12 max-w-[450px] gap-2'>
            <h1 className='font-bold text-3xl capitalize 
            leading-[2.75rem] opacity-80 p-3'>{title}</h1>
            <p className='mt-4 p-3 text-[1.125rem] leading-[2rem] text-xl'>
                <span className='text-richblack-200'>{desc1}</span>
                <span className='text-orange-500 italic'>{desc2}</span>
            </p>

            {
                fromtype==="SignUp" ? 
                (<SignUpForm setisloggedIn={setisloggedIn}/> ) :
                (<LoginForm  setisloggedIn={setisloggedIn}/>)
            }

            <div>
            <button className='text-richblack-100 flex w-full gap-3 rounded-lg font-medium border border-richblack-700 px-[12px] py-[8px] mt-6 mx-auto justify-center items-center' >
        <FcGoogle/>
            Sign up With Google
        </button>
            </div>
        </div>
            
        <div>
            <img src={image}  className="object-cover"  width={'450px'} height={'450px'} alt="" />
        </div> 
        
        
    </div>
  )
}

export default Template