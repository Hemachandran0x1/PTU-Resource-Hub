import React from 'react'
import '../Styles/Requestsubmit.css'
import Grid from '@mui/material/Grid';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Sidebar from './Sidebar';
import Search from './Search';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Requestsubmit() {
  return (
<Grid container>
    <Grid item xs={3}>
    <Sidebar/>
    </Grid>
    <Grid item xs={9}>
    <Search/>
    <div className='request_main' >
            
            <Box sx={{ width: '87%' }} >
      <Stack spacing={2}>
        <Item className='request_top' style={{borderRadius:'42px'}}>
        <div >
        <br></br>
    <CheckCircleOutlineRoundedIcon fontSize="large"></CheckCircleOutlineRoundedIcon>
    <h1>Your request has been received!!!</h1>
    <h1>Thank you for reaching out to us.</h1>
      <br></br>
      <h2>We'll get back to you soon</h2>
                </div>
                </Item>
                </Stack>
                </Box>
                </div>
  </Grid>
</Grid>    

  )
}
