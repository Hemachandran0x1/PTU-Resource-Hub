import Grid from '@mui/material/Grid';
import "../Styles/Request.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from './Sidebar';
import {Button} from '@mui/material'
import Search from './Search';
import { useState } from 'react';
import '../Styles/Subject.css'
import { Apicalls } from './Apicalls';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
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
  
export default function Subject() {
  const navigate = useNavigate();
  const [subject,setSubject]=useState([{}])
  const [sid1,setSid1]=useState(null)
 
  
    React.useEffect(()=>
    {
      getSubjects();
    },[])
    const getSubjects=()=>
    {
      Apicalls.getSubjects().then(response=>response.data
        ).then(data=>{
          console.log(data)
          setSubject(data)
        },(e)=>console.log(e))
    }
    const handleclick=(sid)=>
    { setSid1(sid)
      console.log(sid)
      navigate("/unit",{state:{"subjectid":sid},});

    }
    const handlecred = ()=>{
      navigate("\changecred")
    };
    const name=ReactSession.get("username");
    
    if(name==null)
    {
       navigate("/login")
    }
    else
    {return (

    <div>
      <Grid container>
        <Grid item xs={3}>
        <Sidebar/>
        </Grid>
        <Grid item xs={9}>
        <Search/>
            <div className='request_main'>
            <Box sx={{ width: '87%' }}>
      <Stack spacing={2}>
        <Item className='request_top'>
        <div >
                <h1>Welcome {name} !</h1>
                </div>
                </Item>
        <Item>
        <div className='request_bottom'>
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Subject</StyledTableCell>
              <StyledTableCell>Code</StyledTableCell>
              <StyledTableCell>Syllabus</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subject && subject.map && subject.map((row,i) => (
              <StyledTableRow key={i}>
                <StyledTableCell >
                  {row.subjectname} 
                </StyledTableCell>
                <StyledTableCell>{row.subjectcode}</StyledTableCell>
                <StyledTableCell ><a href={row.syllabus} target='_blank' rel="noreferrer" >{row.syllabus}</a></StyledTableCell>
                <StyledTableCell><Button variant='contained' className='icon' color='primary' onClick={()=>handleclick(row.id)}>Explore</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
                </div>
                </Item><div >
                <Button variant='contained' className='icon2' color='primary' onClick={()=>handlecred()}> Change Credentials</Button></div>
      </Stack>
    </Box>
    
            </div>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
    </div>
  )}}

//  navigate("/credentials",{state:{"name":name,"email":email,"password":password},});
