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
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Paper } from '@mui/material';
import { useState } from 'react';
import { Apicalls } from './Apicalls';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Select from 'react-select';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign:'left',
  color: theme.palette.text.secondary,
}));
let optionsSubject=[];
let optionsSemester=[] ;
let optionsUnit=[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'},{value:'4',label:'4'},{value:'5',label:'5'}];
let optionsTopic=[]
export default function Reportmain() {

const navigate =useNavigate()
const [subject,setSubject]=useState("")
const [sem,setSem]=useState("")
const [unit,setUnit]=useState("")
const [topic,setTopic]=useState("")
const [desc,setDesc]=useState("")

useEffect(() => {  
   
      Apicalls.getSubjects()
      .then(response => response.data
      ).then(data => {
      data.map((subj)=>{optionsSubject.push({value:subj.id,label:subj.subjectname})})
      console.log(data)
      }, (e) =>{
      console.log(e);
      })
      Apicalls.getSems()
      .then(response => response.data
      ).then(data => {console.log(data)
      data.map((semy)=>{optionsSemester.push({value:semy.id,label:semy.semester})}); 
      }, (e) =>{
      console.log(e);
      })  
},[]);
const handleUnit=(unit)=>{
  setUnit(unit);
  console.log(subject.value)
  Apicalls.getTopicsByunit(subject.value,unit).then(response => response.data
    ).then(data => { console.log(data)
    data.map((topics)=>{optionsTopic.push({value:topics.id,label:topics.topicname})}); 
    }, (e) =>{
    console.log(e);
    })  
}
const handleSubmit=()=>{
  const report={
    "reportdesc":desc,
    "topic":topic.value,
    "unit":unit,
    "semester":sem.value,
    "subject":subject.value
  }
  Apicalls.addReport(report).then(response => {
    console.log(response)
    navigate("/submit_report")
  }) .catch(error => {
      
      const error1=error;
      console.log(error)
    });
}  
return (
    <Grid container>
      <Grid xs={3}>
            <Sidebar/></Grid>
      <Grid xs={9}>
        <Search/>
    <br></br>
    <div className='request_main'>
            
            <Box sx={{ width: '87%' }}>
      <Stack spacing={2}>
        <Item className='request_top'>
        <div >
        <ButtonGroup variant="outlined" aria-label="outlined button group" >
        <Link to="/request" style={{color:'inherit',textDecorationLine:'none'}}>
          <Button style={{borderColor: '#27374D',color:'#27374D'}}>Request</Button>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/report" style={{color:'inherit',textDecorationLine:'none'}}>
          <Button variant="contained" style={{backgroundColor:'#27374D'}}>Report</Button>
        </Link>
      </ButtonGroup>
      
      <div>
        <h1 style={{fontSize:'45px'}}>Report any mismatched or outdated material here</h1>
        <Box  
      component="form" style={{ display: 'flex', flexDirection: 'column' }}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <Select className="selectbox2"
            placeholder='Semester'
            defaultValue={sem}
            onChange={setSem}
            options={optionsSemester}
                />  
        <Select className="selectbox2"
            placeholder='Subject'
            defaultValue={subject}
            onChange={setSubject}
            options={optionsSubject}
                />
            <TextField id="outlined-basic" placeholder="unit" variant="outlined" onChange={(e) => handleUnit(e.target.value)} />

        <Select className="selectbox3"
            placeholder='Topic'
            defaultValue={topic}
            onChange={setTopic}
            options={optionsTopic}
                />  
      <TextField
          id="outlined-multiline-flexible"
          placeholder="What is the issue?"
          multiline
          maxRows={7}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Button style={{ alignSelf: 'flex-start' , marginLeft: "10px",backgroundColor:'#27374D'}} variant="contained" onClick={()=>handleSubmit()}>Submit</Button>
    </Box>
      </div>

    
                </div>
                </Item>
                </Stack>
                </Box>
                </div>
    </Grid>
    </Grid> 
      )

}
/*    <TextField id="outlined-basic" label="Semester" variant="outlined" onChange={(e) => setSem(e.target.value)}/>
    <TextField id="outlined-basic" label="Subject" variant="outlined"onChange={(e) => setSubject(e.target.value)} />
    <TextField id="outlined-basic" label="Topic" variant="outlined" onChange={(e) => setTopic(e.target.value)} />*/