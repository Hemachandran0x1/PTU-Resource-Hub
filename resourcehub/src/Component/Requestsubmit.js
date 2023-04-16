import React from 'react'
import '../Styles/Requestsubmit.css'
import Grid from '@mui/material/Grid';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

export default function Requestsubmit() {
  return (
    <div className='requestsubmit_main'><Grid container>
    <Grid item xs={3}></Grid>
    <Grid item xs={9}>
    <CheckCircleOutlineRoundedIcon fontSize="large"></CheckCircleOutlineRoundedIcon>
    <h1>Your request has been received!!!</h1>
    <h1>Thank you for reaching out to us.</h1>
      <br></br>
      <h2>We'll get back to you soon</h2>
  </Grid>
</Grid>
      
    </div>
  )
}
