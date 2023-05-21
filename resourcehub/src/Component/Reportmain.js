import React from 'react'
import Sidebar from './Sidebar';
import '../Styles/Reportmain.css'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Search from './Search';
export default function Reportmain() {
  return (
    <Grid container>
      <Grid xs={3}>
            <Sidebar/></Grid>
      <Grid xs={9}>
        <Search/>
    <br></br>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Link to="/request" style={{color:'inherit',textDecorationLine:'none'}}>
          <Button>Request</Button>
        </Link>
        <Link to="/report" style={{color:'inherit',textDecorationLine:'none'}}>
          <Button variant="contained">Report</Button>
        </Link>
      </ButtonGroup>
      
      <div>
        <h1>Report any mismatched or outdated material here</h1>
        <Box  
      component="form" style={{ display: 'flex', flexDirection: 'column' }}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="outlined-basic" label="Semester" variant="outlined" />
    <TextField id="outlined-basic" label="Subject" variant="outlined" />
    <TextField id="outlined-basic" label="Unit" variant="outlined" />
    <TextField id="outlined-basic" label="Topic" variant="outlined" />
      <TextField
          id="outlined-multiline-flexible"
          label="What is the issue?"
          multiline
          maxRows={7}
        />
        <Button style={{ alignSelf: 'flex-start' , marginLeft: "10px"}} variant="contained" onClick={SubmitEvent}>Submit</Button>
    </Box>
      </div>

    
    </Grid>
    </Grid> 
      )

}
