import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  IconButton
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import { auth } from "../../Items/Firebase";
import { Link } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




const SignUp = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showPassworded, setShowPassworded] = React.useState(false);

  const handleClickShowPassworded = () => setShowPassworded((show) => !show);

  const handleMouseDownPassworded = (event) => {
    event.preventDefault();
  };

  document.body.style.overflow = 'hidden';
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passworded, setPassworded] = useState("");

  const navigate = useNavigate();
  const handleRegister = async(e) => {
  e.preventDefault();
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "SignIn Successfully",
      showConfirmButton: false,
      timer: 2500,
    });
    console.log(email + "" + password);
    navigate("/home");
  } catch (error) {
    Swal.fire({
      position: "top-center",
      icon: "error",
      title: "Fill The Coloumns Correctly",
      showConfirmButton: false,
      timer: 2500,
    });
  }
  };
  return (
   
      <Box
        sx={{
          height:"100vh",
          display: "flex",
          justifyContent: "center",
        
          alignItems: "center",
          width:"100%",
        
         
          
          
          
        }}
      >{/* Main */}
        

        <Box sx={{ boxShadow: 5, p: 0, m: 0 }}>
          {/* Form */}

          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0099ff"
                fill-opacity="1"
                d="M0,288L48,261.3C96,235,192,181,288,186.7C384,192,480,256,576,261.3C672,267,768,213,864,176C960,139,1056,117,1152,138.7C1248,160,1344,224,1392,256L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </Box>

          <Box>
            <Typography sx={{ fontSize: "1.8rem", mt: 3,  px:8 ,textAlign:"center",color:"#0099ff",fontWeight:600}}>Techbrain Networks</Typography>
          </Box>

          <Typography sx={{ fontSize: "1rem", mt: 3,  px:8,fontWeight:600 }}>
            Sign Up
          </Typography>

          <Box sx={{  px:8 }}>
            <Box>
              <TextField
                sx={{ mt: 3,width:"300px" }}
                id="input-with-icon-textfield"
                size="small"
                placeholder="Enter Your Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                  
                  
                }}
                variant="outlined"
              />
            </Box>

            <Box>
              <TextField
                sx={{ mt: 3 ,width:"300px"}}
                id="input-with-icon-textfield"
                size="small"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                  
                }}
                variant="outlined"
              />
            </Box>

            <Box>
              <TextField
                sx={{ mt: 3,width:"300px" }}
                id="input-with-icon-textfield"
                size="small"
                placeholder="Enter Your Password"
                type={showPassword ? 'text' : 'password'}
               
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment:password === ""?null:(
                    <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                    </InputAdornment>
                  )
                }}
                variant="outlined"
              />
            </Box>

            <Box>
              <TextField
                sx={{ mt: 3,width:"300px" }}
                id="input-with-icon-textfield"
                size="small"
                placeholder="Re-Enter The Password"
                type={showPassworded ? 'text' : 'password'}
                onChange={(e) => setPassworded(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment:passworded === ""?null:(
                    <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassworded}
                  onMouseDown={handleMouseDownPassworded}
                  edge="end"
                >
                  {showPassworded ?<VisibilityOff/>:<Visibility/>}
                </IconButton>
                    </InputAdornment>
                  )
                }}
                variant="outlined"
              />
            </Box>
          </Box>
          {/* Input Main */}

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="contained"
              disableRipple
              disableElevation
              onClick={handleRegister}
              sx={{ cursor: "pointer",backgroundColor: "#0099ff" }}
            >
              Sign Up
            </Button>
          </Box>

          <Box sx={{ display: "flex",justifyContent:"center", mt: 3,  px:8 }}>
            <Typography>Already have an account ?</Typography>
            <Link to="/Signin" style={{textDecoration:"none"}}><Typography sx={{ cursor: "pointer", ml: 1,color:"#0099ff" }}>Sign In</Typography></Link>
          </Box>


          <Box sx={{p:0,mt:2,mb:-0.5}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0099ff"
                fill-opacity="1"
                d="M0,0L48,37.3C96,75,192,149,288,165.3C384,181,480,139,576,149.3C672,160,768,224,864,245.3C960,267,1056,245,1152,202.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </Box>

          

        </Box>{/* Form */}

      </Box> 


      
      
    
  );
};

export default SignUp;
