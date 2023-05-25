import React, { Component } from 'react';
import {Grid,Box} from '@mui/material';
import '../Styles/contribute.css'
import img1 from '../assets/greentick.png';
import '../Styles/contributeauth.css';
import Sidebar from './Sidebar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Search from './Search';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ContributeAuth() {
  return (
            <div>
            <Grid container>
                    <Grid item xs={3}>
                    <Sidebar/> 
                    </Grid>
                    <Grid item xs={9}>
                    <Search/>
            <Box sx={{ width: '87%' }}>
      <Stack spacing={2}>
        <Item className='request_top'  style={{borderRadius:'48px',padding:'100px',marginTop:'50px',marginLeft:'50px'}}>
        <div >
        <div className='imgcol' style={{paddingLeft:"40%"}}>
                    <img src={img1} alt="" />
                  
                    </div>
                
                    <h1>First step authentication successful ! </h1>
                    <h2> Thank you for contributing!</h2>
                    <div>
                        <h2>You will receive an email regarding the status of your contribution.
                            Until then keep learning !
                        </h2>
                    </div>
                </div>
                </Item>
                </Stack>
                </Box>
                    </Grid>                
                </Grid>
                </div>
                 )
}
