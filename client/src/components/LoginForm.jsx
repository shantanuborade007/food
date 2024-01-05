import {
    Container,
    Button,
    Grid,
    Paper,
    TextField,
    IconButton,
    InputAdornment
  } from "@mui/material";
  
  import VisibilityIcon from "@mui/icons-material/Visibility";
  import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
  import { useState } from "react";
  import { useDispatch } from "react-redux";
 import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import axios from 'axios';
  
  const LoginForm = ({setisloggedIn}) => {
    const [values, setValues] = useState({
      email: "",
      pass: "",
      showPass: false
    });
  

    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
  try {
    const response = await axios.post('/login', {
      email: values.email,
      password: values.pass
    });

    if (response.data.success) {
      toast.success("Logged In Successfully !");
      navigate("/Dashboard");
      setisloggedIn(true);
    } else {
      toast.error("Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    toast.error("An error occurred during login. Please try again.");
  }
      setisloggedIn(true);
    };
  
    const handleChange = (e) => {
        setValues((prevData)=>(
            {
                ...prevData,
                [e.target.name]:e.target.value
            }
        ))
    };
  
    const togglePasswordHide = () => {
      setValues({
        ...values,
        showPass: !values.showPass
      });
    };
  
    // const email = useSelector((state) => state.login.email);
  
    return (
      <div>
        <Container maxWidth="sm">
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            style={{ minHeight: "55vh" }}
          >
            <Paper sx={{ padding: 5 }}>
              <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                  <Grid item >

                    <TextField
                      name="email"
                      type="email"
                      fullWidth
                      label="Enter your email"
                      placeholder="Email Address"
                      variant="outlined"
                      required
                      onChange={handleChange}
                    />
                  </Grid>
  
                  <Grid item>
                    <TextField
                      name="pass"
                      type={values.showPass ? "text" : "password"}
                      fullWidth
                      label="Password"
                      placeholder="Password"
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
                    <Link to="/otp">
                             <p className='text-blue-500 text-xs mt-1 ml-auto max-w-max '>
                              forgot password
                             </p>
                    </Link>
                  </Grid>
  
                  <Grid item>
                    <Button 
                    style={{backgroundColor:'#f06d06'}}
                    type="submit" fullWidth variant="contained">
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Container>
      </div>
    );
  };
  
  export default LoginForm;
  