import React from 'react'
import "../Styles/Requestmain.css"
import { styled } from '@mui/material/styles';
import Sidebar from './Sidebar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Search from './Search'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign:'left',
  color: theme.palette.text.secondary,
}));

export default function Requestmain() {
  return (
    
            
    <div className='requestmain_main'>
    <Grid container>
        <Grid item xs={3}><Sidebar/></Grid>
        <Grid item xs={9}>
        <Search />
        <br></br>
        <div className='request_main'>
            
            <Box sx={{ width: '87%' }}>
      <Stack spacing={2}>
        <Item className='request_top'>
        <div >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Link to="/request" style={{color:'inherit',textDecorationLine:'none'}}>
          <Button variant="contained">Request</Button>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/report" style={{color:'inherit',textDecorationLine:'none'}}>
          <Button >Report</Button>
        </Link>
</ButtonGroup>
      <div>
      <br></br>
      <h1>Request your material below</h1>
      <Box  
      component="form" style={{ display: 'flex', flexDirection: 'column' }}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-multiline-flexible"
          label="Type your request here"
          multiline
          maxRows={7}        />
        <Button style={{ alignSelf: 'flex-start' , marginLeft: "10px"}} variant="contained" onClick={SubmitEvent}>Submit</Button>
        
    </Box>
      </div>
                </div>
                </Item>
                </Stack>
                </Box>
                </div>
      
      </Grid>
    </Grid>
    </div>
    
  )
}
