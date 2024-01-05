import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex items-center justify-center'>

          <div className='flex flex-col items-center justify-center max-w-[30%] mx-auto'>

          <h1 className='font-extrabold text-3xl text-[#f06d06] my-[50%]'>👋 Welcome To EcoFood</h1>

          <div className='flex gap-5'>
          <Link to="/viewrecipe">
                    <button
                    className='py-[8px] px-[18px] rounded-[8px] bg-orange-400 text-white font-bold text-xl '>
                        View Recipies
                    </button>
          </Link>  

          <Link to="/">
                    <button
                    className='py-[8px] px-[18px] rounded-[8px] bg-orange-400 text-white font-bold text-xl '>
                        Home
                    </button>
          </Link> 
          </div>
      

          </div>
    </div>
  )
}

export default Dashboard