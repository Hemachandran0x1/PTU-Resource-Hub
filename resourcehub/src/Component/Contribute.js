import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import '../Styles/contribute.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Search from './Search';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 18,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#000000',
    borderColor: '#132743',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

class Contribute extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
          <Grid container>
          <Grid xs={3}>
                <Sidebar/></Grid>
          <Grid xs={9}> 
          <Search/>
            <div>
                      <h1> Hey Geeks!</h1>
                      <h1> Contribute any new material here! ↓</h1>
                      <TextField id="standard-basic" label="Subject" variant="standard" inputProps={{
          style: {
            width: "500px",
          },
        }}/><br></br><br></br>
                      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Unit</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="I" control={<Radio />} label="I" />
        <FormControlLabel value="II" control={<Radio />} label="II" />
        <FormControlLabel value="III" control={<Radio />} label="III" />
        <FormControlLabel value="IV" control={<Radio />} label="IV" />
        <FormControlLabel value="V" control={<Radio />} label="V" />
        
      </RadioGroup>
    </FormControl><br></br>
                      <TextField id="standard-basic" label="Topic" variant="standard" inputProps={{
          style: {
            width: "500px",
          },
        }}/><br></br><br></br>
                      <TextField id="standard-basic" label="Topic Name" variant="standard" inputProps={{
          style: {
            width: "500px",
          },
        }}/><br></br><br></br>
                      <TextField id="standard-basic" label="Url" variant="standard" inputProps={{
          style: {
            width: "500px",
          },
        }} /><br></br><br></br><br></br>

<BootstrapButton variant="contained" disableRipple>
        Submit
      </BootstrapButton>
                </div>
        </Grid>
        </Grid>
        );
    }
}
 
export default Contribute;