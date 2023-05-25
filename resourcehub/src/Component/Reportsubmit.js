import React from 'react'
import '../Styles/Reportsubmit.css'
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

export default function Reportsubmit() {
  return (
    <Grid container>
      <Grid xs={3}>
            <Sidebar/></Grid>
      <Grid xs={9}>
        <Search/>
        <div className='request_main' >
            
            <Box sx={{ width: '87%' }} >
      <Stack spacing={2}>
        <Item className='request_top' style={{borderRadius:'42px'}}>
        <div >
        <br></br>
    <CheckCircleOutlineRoundedIcon fontSize="large"></CheckCircleOutlineRoundedIcon>
    <h1>Your report has been received!!!</h1>
    <h1>Sorry for the misinformation</h1>
      <br></br>
      <h2>We'll verify the credentials and get back to you soon</h2>
      <h3>Until then, Keep learning !!!</h3>
                </div>
                </Item>
                </Stack>
                </Box>
                </div>
    
    </Grid>
</Grid>
    
  )
}
