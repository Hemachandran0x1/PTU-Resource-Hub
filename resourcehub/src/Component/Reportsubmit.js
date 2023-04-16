import React from 'react'
import '../Styles/Reportsubmit.css'
import Grid from '@mui/material/Grid';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

export default function Reportsubmit() {
  return (
    <div className='reportsubmit_main'><Grid container>
    <Grid item xs={3}></Grid>
    <Grid item xs={9}>
    <CheckCircleOutlineRoundedIcon fontSize="large"></CheckCircleOutlineRoundedIcon>
    <h1>Your report has been received!!!</h1>
    <h1>Sorry for the misinformation</h1>
      <br></br>
      <h2>We'll verify the credentials get back to you soon</h2>
  </Grid>
</Grid>
      
    </div>
  )
}
