import React, {useState} from "react";
import '../Styles/Login.css'
import { TextField, Button, Typography ,Box,Grid} from "@mui/material";
//import { Link } from "react-router-dom"
import pic from '../assets/placeholder.jpg';
//import Sidebar from "./Sidebar";
import PermanentDrawerLeft from "./Sample";

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
            <PermanentDrawerLeft/>
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
                    <Typography mt={3}>Need an account? Signup here</Typography>
                    
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
