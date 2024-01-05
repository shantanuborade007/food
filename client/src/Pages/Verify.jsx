import React from 'react'
import { Link } from 'react-router-dom';
import {
   Grid,
    TextField,
    IconButton,
    InputAdornment
  } from "@mui/material";
import { useState } from 'react';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';




const Verify = () => {
    const [values, setValues] = useState({
        email: "",
        pass: "",
        showPass: false,
        showPass1: false

      });

      const togglePasswordHide = () => {
        setValues({
          ...values,
          showPass: !values.showPass
        });
      };

      const togglePasswordHide1 = () => {
        setValues({
          ...values,
          showPass1: !values.showPass1
        });
      };

      const handleChange = (e) => {
        setValues((prevData)=>(
            {
                ...prevData,
                [e.target.name]:e.target.value
            }
        ))
    };
  return (
    <div className='flex flex-col mt-10 justify-center items-center max-w-[1160px] mx-auto gap-y-16'>
       <form>
            <div className='flex gap-10 p-5'>
                {/* entre your mail id  */}
                <TextField
                     required
                     id="outlined-required"
                     label="Entre Email"
                     placeholder="Entre your Email"
                 />

        <TextField
          required
           id="outlined-required"
          label="Entre the OTP"
           placeholder="Entre the OTP"
            />

                     <Button variant="contained" endIcon={<KeyboardArrowRightIcon/>}>
                               Verify
                     </Button>
            
            </div>


            <div className='flex gap-10 justify-center items-starts pt-8 ml-[-50px]'>
            <Grid item>
                    <TextField
                      name="pass"
                      type={values.showPass ? "text" : "password"}
                      fullWidth
                      label="New password"
                      placeholder="Entre New Password"
                      variant="outlined"
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              // onClick={handlePassVisibilty}
                              aria-label="toggle password"
                              edge="end"
                              onClick={togglePasswordHide}
                            >
                              {values.showPass ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                        
                      onChange={handleChange}
                    />
                   
             </Grid>

             <Grid item>
                    <TextField
                      name="pass"
                      type={values.showPass1 ? "text" : "password"}
                      fullWidth
                      label="confirm New password"
                      placeholder="Confirm New password"
                      variant="outlined"
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              // onClick={handlePassVisibilty}
                              aria-label="toggle password"
                              edge="end"
                              onClick={togglePasswordHide1}
                            >
                              {values.showPass1 ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                        
                      onChange={handleChange}
                    />
                 
            </Grid>
            </div>
       </form>

       <Button variant="contained" size="large" className='w-1/2 font-bold ' >update</Button>
    </div>
  )
}

export default Verify