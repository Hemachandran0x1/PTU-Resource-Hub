import React from 'react'
import Sidebar from './Sidebar'
import { Grid,Button} from '@mui/material'
import Search from './Search'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Apicalls } from './Apicalls';
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  
function Unitpage(props) {
  const [topic1,setTopic1]=useState([{}])
  const [topic2,setTopic2]=useState([{}])
  const [topic3,setTopic3]=useState([{}])
  const [topic4,setTopic4]=useState([{}])
  const [topic5,setTopic5]=useState([{}])
  const location =useLocation()
  const navigate=useNavigate()
  const handleclick=(id)=>{
    navigate("/topics",{state:{"topicid":id},});
  }
  React.useEffect(()=>
  {
    getTopics();
    console.log(location)
    
  },[])
  const getTopics=()=>
  { var sid
    if(location.state.subjectid != null)
    { sid =location.state.subjectid}
    else
    {
      sid=2
    }
    Apicalls.getTopicsByunit(sid,1).then(response=>response.data
      ).then(data=>{
        console.log(data)
        setTopic1(data)
      },(e)=>console.log(e))
    Apicalls.getTopicsByunit(1,2).then(response=>response.data
      ).then(data=>{
        console.log(data)
        setTopic2(data)
      },(e)=>console.log(e))
    Apicalls.getTopicsByunit(1,3).then(response=>response.data
      ).then(data=>{
        console.log(data)
        setTopic3(data)
      },(e)=>console.log(e))
    Apicalls.getTopicsByunit(1,4).then(response=>response.data
      ).then(data=>{
        console.log(data)
        setTopic4(data)
      },(e)=>console.log(e))
    Apicalls.getTopicsByunit(1,5).then(response=>response.data
      ).then(data=>{
        console.log(data)
        setTopic5(data)
      },(e)=>console.log(e))
  }
  return (
    <div>
    <Grid container>
 <Grid xs={3}>
       <Sidebar/></Grid>
 <Grid xs={9}> 
   <div>
   <Search/>
   </div>
   <div>
   <Grid container marginTop={10}>
    <Grid xs='10'>
      <Accordion defaultExpanded='true' style={{backgroundColor:'#27374D'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'30px', color:'white'}}>Unit 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
      
      <Stack spacing={2}>
        <Item className='request_top'>
        <div >
                <h1>Select Topics to Learn</h1>
                </div>
                </Item>
        <Item>
        <div className='request_bottom'>
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>TOPIC</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topic1 && topic1.map && topic1.map((row,i) => (
             
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                  {row.topicname}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant='contained' color='primary' onClick={()=>handleclick(row.id)} style={{backgroundColor:'#27374D',position: 'absolute',right: 30,bottom: 10}}>Learn
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
                </div>
                </Item>
                
      </Stack>
    
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'#27374D'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'30px', color:'white'}}>Unit 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
           
      <Stack spacing={2}>
        <Item>
        <div className='request_bottom'>
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>TOPIC</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topic2 && topic2.map && topic2.map((row,i)  => (

              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                {row.topicname}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant='contained' color='primary'  onClick={()=>handleclick(row.id)} style={{backgroundColor:'#27374D',position: 'absolute',right: 30,bottom: 10}}>Learn
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
                </div>
                </Item>
                
      </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'#27374D'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'30px', color:'white'}}>Unit 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
           
      <Stack spacing={2}>
        <Item>
        <div className='request_bottom'>
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>TOPIC</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topic3 && topic3.map && topic3.map((row,i)  => (
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                {row.topicname}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant='contained' color='primary'  onClick={()=>handleclick(row.id)} style={{backgroundColor:'#27374D',position: 'absolute',right: 30,bottom: 10}}>Learn
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
                </div>
                </Item>
                
      </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'#27374D'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'30px', color:'white'}}>Unit 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Stack spacing={2}>
        <Item>
        <div className='request_bottom'>
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>TOPIC</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topic4 && topic4.map && topic4.map((row,i)  => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                {row.topicname}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant='contained' color='primary'  onClick={()=>handleclick(row.id)} style={{backgroundColor:'#27374D',position: 'absolute',right: 30,bottom: 10}}>Learn
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
                </div>
                </Item>
                
      </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'#27374D'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize:'30px', color:'white' }}>Unit 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Stack spacing={2}>
        <Item>
        <div className='request_bottom'>
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>TOPIC</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topic5 && topic5.map && topic5.map((row,i)  => (
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                {row.topicname }
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant='contained' color='primary'  onClick={()=>handleclick(row.id)} style={{backgroundColor:'#27374D',position: 'absolute',right: 30,bottom: 10}}>Learn
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
                </div>
                </Item>
                
      </Stack>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Grid xs='2'>

      </Grid>
    </Grid>
    </div>
   </Grid>

 </Grid>
 <br></br>
 <br></br>
</div>
  )
}

export default Unitpage
