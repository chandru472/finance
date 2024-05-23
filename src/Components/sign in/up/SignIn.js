import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Divider,
  IconButton,
  InputLabel,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import { auth } from "../../Items/Firebase";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 2500,
      });
      console.log(email + "" + password);
      navigate("/home");
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Email or Password Incorrect",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  document.body.style.overflow = "hidden";

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",

        alignItems: "center",
        width: "100%",
        
      }}
    >
      {/* Main */}

      <Box sx={{ boxShadow: 5, p: 0, m: 0 }}>
        {/* Form */}

        <Box sx={{ borderRadius: "10px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              style={{ borderRadius: "10px" }}
              fill="#0099ff"
              fill-opacity="1"
              d="M0,288L48,261.3C96,235,192,181,288,186.7C384,192,480,256,576,261.3C672,267,768,213,864,176C960,139,1056,117,1152,138.7C1248,160,1344,224,1392,256L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "1.8rem",
              mt: 3,
              px: 8,
              textAlign: "center",
              color: "#0099ff",
              fontWeight:600
            }}
          >
            Techbrain Networks
          </Typography>
        </Box>

        <Typography sx={{ fontSize: "1rem", mt: 3, px: 8,fontWeight:600 }}>
          Sign In
        </Typography>

        <form onSubmit={handleLogin}>
          <Box sx={{ px:8}}>
            <Box>
              

              <TextField
                sx={{ mt: 3, width:"300px" }}
                id="input-with-icon-textfield"
                size="small"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                
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
                sx={{ mt: 3, width:"300px"  }}
                id="input-with-icon-textfield"
                size="small"
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment:password === "" ? null :(
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

            {/* Input Main */}

            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Button
                variant="contained"
                disableRipple
                disableElevation
                onClick={handleLogin}
                sx={{
                  cursor: "pointer",
                  backgroundColor: "#0099ff",
                  "&:hover": { backgroundColor: "#0598ff" },
                }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </form>

        <Box sx={{ my: 2, px: 2 }}>
          <Divider>
            <Typography>or</Typography>{" "}
          </Divider>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mx: { xs: 4, md: 8 },
          }}
        >
          <IconButton disableTouchRipple>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="35"
              height="35"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </IconButton>
          <IconButton disableTouchRipple>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 48 48"
            >
              <linearGradient
                id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                x1="9.993"
                x2="40.615"
                y1="9.993"
                y2="40.615"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#2aa4f4"></stop>
                <stop offset="1" stop-color="#007ad9"></stop>
              </linearGradient>
              <path
                fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              ></path>
              <path
                fill="#fff"
                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
              ></path>
            </svg>
          </IconButton>

          <IconButton disableTouchRipple>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 50 50"
            >
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            px: { xs: 4, md: 8 },
          }}
        >
          <Typography>don't have an account ?</Typography>
          <Link to="/Signup" style={{ textDecoration: "none" }}>
            <Typography sx={{ cursor: "pointer", ml: 1, color: "#0099ff" }}>
              Sign Up
            </Typography>
          </Link>
        </Box>

        <Box sx={{ p: 0, mt: 2, mb: -0.5 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,0L48,37.3C96,75,192,149,288,165.3C384,181,480,139,576,149.3C672,160,768,224,864,245.3C960,267,1056,245,1152,202.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </Box>
      </Box>
      {/* Form */}
    </Box>
  );
};

export default SignIn;
