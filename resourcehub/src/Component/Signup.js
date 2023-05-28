import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import image from '../assets/image.jpg';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import '../Styles/Signup.css'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/signup">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Signup() {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate =useNavigate();
  const [register,setRegister]=useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user ={
      name:data.get('Name'),
      email: data.get('email'),
      password: data.get('password'),
      departmentid:1,
      semesterid:1
    };
    setRegister(true)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    
  };
if(register)
{//,{state:{"name":data.get('Name'),"email":data.get('email'),"password":data.get('password')},}
  navigate("/credentials",{state:{"name":name,"email":email,"password":password},});
}
  return (
<ThemeProvider theme={theme}>
<div className='container'>
<img src={image}  alt="Image " className="static-image" />

</div>
      <Container component="main" maxWidth="xs" sx={{ backgroundColor: '#9DB2BF' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: -5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#9DB2BF',
            padding: '20px',
            borderRadius: '5px',
            boxSizing:'unset',
          }}
        >
          <Avatar style={{backgroundColor:'#27374D'}} sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  fullWidth
                  id="Name"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,backgroundColor:'#27374D'}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" style={{color:'#27374D'}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>

    </ThemeProvider>
    
  );
}
/*import React, {useState} from 'react';
import { TextField, Button, Grid, Stack, Typography } from '@mui/material';
import { Link } from "react-router-dom"
import placeholder from '../assets/placeholder.jpg';
import '../Styles/Login.css'
function Signup() {
  const [Name, setName] = useState('')
   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(Name,  email, password,confirmpassword) 
    }
 
    return (
        <React.Fragment>
            <Grid container>
              <Grid xs={2}>
              
              </Grid>
              <Grid xs={8}>
                <div className='maincomp'>
                  <div className='picdiv'>
                    <img src={placeholder} alt="ph" ></img>
                  </div>
                  <div className='logindiv'>
                <Typography variant="h4" my={5}>Signup now</Typography>
                <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                    <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Name"
                            onChange={e => setName(e.target.value)}
                            value={Name}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                    </Stack>
                    <TextField
                        type="email"
                        variant='outlined'
                        color='secondary'
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                        required
                        InputLabelProps={{ shrink: true }}
                        sx={{mb: 4}}
                    />
                    <TextField
                        type="password"
                        variant='outlined'
                        color='secondary'
                        label="Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        required
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        sx={{mb: 4}}
                    />
                        <TextField
                        type="password"
                        variant='outlined'
                        color='secondary'
                        label="Confirm Password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmpassword}
                        required
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        sx={{mb: 4}}
                    />
                    <Button variant="outlined" color="secondary" type="submit">Register</Button>
                </form>
                <Typography mt={3}>Already have an account? <Link to="/login">Login Here</Link></Typography>
              </div></div>
            </Grid>
            <Grid xs={2}>
            
            </Grid>
          </Grid>

      </React.Fragment>
    )
}

export default Signup
*/