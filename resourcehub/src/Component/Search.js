import React from 'react'
import Sidebar from './Sidebar'
import { Box, Typography } from '@mui/material'
import {Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import '../Styles/Search.css';
import { ReactSession } from 'react-client-session';
import { useState } from 'react';
import { useNavigate } from 'react-router';
export default function Search() {
  const [loggedout,setLoggedout]=useState(false);
  const handleLogout = ()=>
  {
    ReactSession.set("username",null);
    setLoggedout(true);
  }
  
  return (
      <div>
        <div className='searchbar'>
          <br></br>
        <Box
      component="form"
      sx={{
        display:'flex',
        '& .MuiTextField-root': { m: 1, width: '90ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
    <TextField
          id="outlined-multiline-flexible"
          label="What do you want to learn today?"
          multiline
          maxRows={4}
        />
        </div>
        <div className='search_button'>
        <Button className='icon' onClick={handleLogout} variant="contained" startIcon={<SearchIcon/>}>
</Button>
<Button className='icon' variant="contained" startIcon={<LogoutIcon />}>
  Logout
</Button>
        </div>
       
        </Box>
  </div>
  </div>
  )
}
