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

function Bookmark() {
  const navigate = useNavigate();
  const [bookmark,setBookmark]=useState([{}])
  const [bkr,setBkr]=useState(0)
  
    React.useEffect(()=>
    {
      getBookmarks();
    },[])
    const getBookmarks=()=>
    {const uid =ReactSession.get("userid")
      Apicalls.getBookmarks(uid).then(response=>response.data
        ).then(data=>{
          console.log(data)
          setBookmark(data)
        },(e)=>console.log(e))
    }
    const handleclick=(bid)=>
    { const uid2 =ReactSession.get("userid")
      Apicalls.deleteBookmark(uid2,bid).then(response => {
    }) .catch(error => {
        console.log(error);
      });
      navigate('/')

    }
  return (
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
                <h1>Bookmark Collection</h1>
                <h2>Study and remove bookmarked contents at ease</h2>
                </div>
                </Item>
        <Item>
        <div className='request_bottom'>
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Url</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          { <TableBody>
            {bookmark && bookmark.map && bookmark.map((row,i) => (
              <StyledTableRow key={i}>
                <StyledTableCell >
                  {row.bookmarkname} 
                </StyledTableCell>
                <StyledTableCell><a href={row.url}>{row.url}</a></StyledTableCell>
                <StyledTableCell><Button variant='contained' className='icon' color='primary' onClick={()=>handleclick(row.id)}>Remove</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody> }
        </Table>
      </TableContainer>
                </div>
                </Item>
                
      </Stack>
    </Box>
            </div>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
    </div>
  )
}

export default Bookmark
