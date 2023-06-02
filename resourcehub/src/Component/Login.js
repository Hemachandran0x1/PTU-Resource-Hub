import * as React from 'react';
import { useState } from 'react';
import {  Navigate, useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Apicalls } from './Apicalls';
import { ReactSession } from 'react-client-session';
import { useEffect } from 'react';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/login">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  
  const navigate =useNavigate();
  const [loggedin,setLoggedin]=useState(false);
  useEffect(()=>
  {
    if(ReactSession.get("username")!=null)
    setLoggedin(true);
  },[])
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    Apicalls.Login(data.get('email'),data.get('password')).then(response => {
      const { id, name, email,password,departmentid,semesterid, role } = response.data;
      ReactSession.set("username",name)
      ReactSession.set("userid",id)
      ReactSession.set("sem",semesterid)
      ReactSession.set("dept",departmentid)
      ReactSession.set("email",email)
      ReactSession.set("pass",password)
      ReactSession.set("role",role)
      console.log(response.data)
      console.log(ReactSession.get("email"))
      setLoggedin(true)}) .catch(error => {
        //handleLogError(error)
        const error1=error;
        console.log(error)
       // console.log("WEAFADASDFAS")
       // console.log(data);
      })
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  if(loggedin){
    navigate("/")
  }
  else
  {return (
    
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/03/26/13/08/sackcloth-1280529_1280.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{backgroundColor:'#9DB2BF'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#9DB2BF',
            }}
          >
            <Avatar style={{backgroundColor:'#27374D'}} sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{backgroundColor:'#27374D'}}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" style={{color:'#27374D'}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2" style={{color:'#27374D'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );}
}
/*import React, {useState} from "react";
import '../Styles/Login.css'

import { TextField, Button, Typography ,Box,Grid,Link} from "@mui/material";
//import { Link } from "react-router-dom"
import pic from '../assets/placeholder.jpg';
//import Sidebar from "./Sidebar";


const Login = () =>  {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
 
    const handleSubmit = (event) => {
        event.preventDefault()
 
        setEmailError(false)
        setPasswordError(false)
 
        if (email === '') {
            setEmailError(true)
        }
        if (password === '') {
            setPasswordError(true)
        }
 
        if (email && password) {
            console.log(email, password)
        }
    }
  return (
    <div>
     <Grid container>
        <Grid xs={2}>
            
        </Grid>
        <Grid xs={8}>
            <div className='maincomp'>
                <div className='picdiv'>
                    <img src={pic} alt="placeholder"> 

                    </img>
                </div>
                
                <div className='logindiv'>
                <div>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <Typography variant="h4" my={5} align="center">Logo</Typography>
                        <Box maxWidth={500}>
                            <TextField 
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            required
                            variant="outlined"
                            size="small"
                            color="secondary"
                            type="email"
                            sx={{mb: 3}}
                            fullWidth
                            value={email}
                            error={emailError}
                            />
                            <TextField 
                            label="Password"
                            onChange={e => setPassword(e.target.value)}
                            required
                            variant="outlined"
                            size="small"
                            color="secondary"
                            type="password"
                            value={password}
                            error={passwordError}
                            fullWidth
                            sx={{mb: 3}}
                            />
                        </Box>
                        <Button variant="outlined" color="secondary" type="submit">Login</Button> 
                    </form>
                    <Typography mt={3}>Forgot password?</Typography>
                    <Typography mt={3}>Need an account? <Link to="/Signup">Signup here</Link></Typography>
                    
                </div>
                </div>
            </div>
        </Grid>
        <Grid xs={2}>

        </Grid>
        
     </Grid>
      
    </div>
  )
}

export default Login
*/