import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { spacing } from '@mui/system';
import Button from '@mui/material/Button';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const otp = () => {
    function clickHandler(){
        toast.success("OTP sent")
    }
  return (
    <div className='w-[500px] h-screen mx-auto flex flex-col gap-y-5 justify-center mt-10' >

       <div>
           <h1 className='text-2xl font-semibold opacity-75'>Forget Password ?</h1>     
       </div>

          <div>
          <Paper variant="outlined" elevation={'4'} />
          </div>


         <div>
         <Typography component="h1" variant="h7">
          Lost your password ? Please enter email address. You will receive a link to create a new password via email.
          </Typography>
         </div>



          <TextField id="standard-basic" label="Email" variant="standard" />

        <Link to='/verify'>
        <Button variant="contained" onClick={clickHandler} >Get OTP</Button>
        </Link>

    </div>
  )
}

export default otp