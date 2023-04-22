import React from 'react'
import '../Styles/Reportsubmit.css'
import Grid from '@mui/material/Grid';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Search from './Search';
export default function Reportsubmit() {
  return (
    <Grid container>
      <Grid xs={3}>
            <Sidebar/></Grid>
      <Grid xs={9}>
        <Search/>
    <div className='reportsubmit_main'>
    <CheckCircleOutlineRoundedIcon fontSize="large"></CheckCircleOutlineRoundedIcon>
    <h1>Your report has been received!!!</h1>
    <h1>Sorry for the misinformation</h1>
      <br></br>
      <h2>We'll verify the credentials get back to you soon</h2>

    </div>
    </Grid>
</Grid>
    
  )
}
