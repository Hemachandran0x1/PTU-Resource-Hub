import React, {useState} from 'react';
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
