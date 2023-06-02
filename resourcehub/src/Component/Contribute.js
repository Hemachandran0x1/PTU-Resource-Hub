import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import '../Styles/contribute.css'
import '../Styles/Request.css'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Search from './Search';
import { Apicalls } from './Apicalls';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Select from 'react-select';
import { ReactSession } from 'react-client-session';

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  let optionsSubject=[];
export default function Contribute() {
  const navigate= useNavigate()
  const [sub,setSubject]=useState("")
  const [unit,setUnit]=useState("")
  const [topic,setTopic]=useState("")
  const [desc,setDesc]=useState("")
  const [url,seturl]=useState("")
  
useEffect(() => {  
   
  Apicalls.getSubjects(ReactSession.get("sem"),ReactSession.get("dept"))
      .then(response => response.data
      ).then(data => {
      data.map((subj)=>{optionsSubject.push({value:subj.id,label:subj.subjectname})})
      console.log(data)
      }, (e) =>{
      console.log(e);
      })
  
},[]);
  const handlecontribute=()=>{
    const contri ={
      "subject":sub.value,
      "unit":unit,
      "topic":topic,
      "description":desc,
      "url":url,
      "approve":0
    }
    Apicalls.addContribute(contri).then(response => {
      console.log(response)
      navigate("/contributeAuth")
    }) .catch(error => {
        
        const error1=error;
        console.log(error)
      });
  }
  return (
    <div>
    <Grid container>
    <Grid xs={3}>
          <Sidebar/></Grid>
    <Grid xs={9}> 
    <Search/>
    <div className='request_main'>
            <Box sx={{ width: '87%' }}>
      <Stack spacing={2}>
        <Item className='request_top'>
        <div >
        <h1 style={{fontSize:'50px'}}> Hey Geeks!</h1>
                <h1 style={{fontSize:'30px'}}> Contribute any new material here! ↓</h1>
      <div className='selectbox' style={{color:'#27374D'}}> <Select 
            placeholder='Subject'
            defaultValue={sub}
            onChange={setSubject}
            options={optionsSubject}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor:'#9DB2BF',

                borderColor:  state.isFocused ? 'blue':'#27374D',

              }),
            }}
                /></div><br></br><br></br>
                <FormControl>
<FormLabel id="demo-row-radio-buttons-group-label">Unit</FormLabel>
<RadioGroup
  row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group"
  onChange={(e) => setUnit(e.target.value)}
>
  <FormControlLabel value="I" control={<Radio />} label="I" />
  <FormControlLabel value="II" control={<Radio />} label="II" />
  <FormControlLabel value="III" control={<Radio />} label="III" />
  <FormControlLabel value="IV" control={<Radio />} label="IV" />
  <FormControlLabel value="V" control={<Radio />} label="V" />
  
</RadioGroup>
</FormControl><br></br>
                <TextField id="standard-basic" label="Topic" variant="standard" onChange={(e) => setTopic(e.target.value)} inputProps={{
    style: {
      width: "500px",
    },
  }}/><br></br><br></br>
                <TextField id="standard-basic" label="Description" variant="standard" onChange={(e) => setDesc(e.target.value)} inputProps={{
    style: {
      width: "500px",
    },
  }}/><br></br><br></br>
                <TextField id="standard-basic" label="Url" variant="standard" onChange={(e) => seturl(e.target.value)} inputProps={{
    style: {
      width: "500px",
    },
  }} /><br></br><br></br><br></br>

<BootstrapButton variant="contained" onClick={()=>handlecontribute()} disableRipple>
  Submit
</BootstrapButton>
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

