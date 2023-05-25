import React from 'react'
import Sidebar from './Sidebar'
import Search from './Search'
import { ReactSession } from 'react-client-session';
import { Grid,Box ,Button} from '@mui/material'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import { Apicalls } from './Apicalls';
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
export default function Topics() {
  const location = useLocation()
  const [textbased,setTextbased]=useState([{}])
  const [video,setVideo]=useState([{}])
  const [material,setMaterial]=useState([{}])
  const navigate =useNavigate()
  useEffect(()=>
  {
    getallContents()
    console.log(location)
    
  },[])
  const handlebookmark=(id,name,url)=>{
    const bk={
      "bookmarkname":name,
      "url":url,
      "contentid":id ,
      "userid":ReactSession.get("userid")
    }
    Apicalls.addBookmark(bk).then(response => {
      console.log(response)
      navigate("/submit_request")
    }) .catch(error => {
        
        const error1=error;
        console.log(error)
      });
  }
const getallContents=()=>
{ var topic;
  if(location.state.topicid != null)
  { topic = location.state.topicid}
  
  Apicalls.getContents(topic,0).then(response=>response.data
    ).then(data=>{
      console.log(data)
      setTextbased(data)
    },(e)=>console.log(e))
  Apicalls.getContents(topic,1).then(response=>response.data
    ).then(data=>{
      console.log(data)
      setVideo(data)
    },(e)=>console.log(e))
    Apicalls.getContents(topic,2).then(response=>response.data
      ).then(data=>{
        console.log(data)
        setMaterial(data)
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
   <div className='topic_main' >
            <Box sx={{ width: '87%' }}>
      <Stack spacing={2}>
        <Item style={{backgroundColor:'#27374D'}}>
        <div className='topic_top'>
                <h1 style={{color:'#9DB2BF'}}>Unit 1: </h1>                         
                {/* // 9DB2BF */}
                <h2 style={{color:'#9DB2BF'}}>Topic:</h2>
                </div>
                </Item>
        <Item style={{backgroundColor:'#27374D'}}>
        <div className='topic_bottom' >
        <h2 style={{color:'#9DB2BF'}}>Text:</h2>
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell >Url</StyledTableCell>
              <StyledTableCell ></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {textbased.map((row) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell ><a href={row.url} target='_blank' rel="noreferrer">{row.url}</a></StyledTableCell>
<<<<<<< HEAD
                <StyledTableCell ><Button variant='contained' color='primary' onClick={()=>handlebookmark(row.id,row.name,row.url)}>Bookmark
=======
                <StyledTableCell ><Button variant='contained' color='primary' style={{backgroundColor:'#27374D'}}>Bookmark
>>>>>>> bc1662291b21d90f20e085826dbbb2664ef10408
                  </Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer><br></br>
<h2 style={{color:'#9DB2BF'}}>Playlist:</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Playlist</StyledTableCell>
              <StyledTableCell>Url</StyledTableCell>
              <StyledTableCell ></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {video.map((row) => (
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell ><a href={row.url} target='_blank' rel="noreferrer">{row.url}</a></StyledTableCell>
<<<<<<< HEAD
                <StyledTableCell align="center"><Button variant='contained' color='primary' onClick={()=>handlebookmark(row.id,row.name,row.url)} >Bookmark
=======
                <StyledTableCell align="center"><Button variant='contained' color='primary' style={{backgroundColor:'#27374D'}}>Bookmark
>>>>>>> bc1662291b21d90f20e085826dbbb2664ef10408
                  </Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h2 style={{color:'#9DB2BF'}}>Materials:</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Url</StyledTableCell>
              <StyledTableCell ></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {material.map((row) => (
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell ><a href={row.url} target='_blank' rel="noreferrer">{row.url}</a></StyledTableCell>
<<<<<<< HEAD
                <StyledTableCell ><Button variant='contained' color='primary' onClick={()=>handlebookmark(row.id,row.name,row.url)}>Bookmark
=======
                <StyledTableCell ><Button variant='contained' color='primary' style={{backgroundColor:'#27374D'}}>Bookmark
>>>>>>> bc1662291b21d90f20e085826dbbb2664ef10408
                  </Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
