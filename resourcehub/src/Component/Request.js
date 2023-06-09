
import Grid from '@mui/material/Grid';
import "../Styles/Request.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Sidebar from './Sidebar';
import Search from './Search';
import { Apicalls } from './Apicalls';
import { useState,useEffect } from 'react';
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
  
  function createData(
    name,
    request,
    status
  ) {
    return { name, request ,status };
  }
  
  const rows = [
    createData('Gokul','lorem ipsum','Pending' ),
    createData('Cegil','lorem ipsum','Approved' ),
    createData('Hems','lorem ipsum','Pending' ),
    createData('Gokul','lorem ipsum','Pending' ),
    createData('Cegil','lorem ipsum','Approved' ),
    createData('Hems','lorem ipsum','Pending' ),
    createData('Gokul','lorem ipsum','Pending' ),
    createData('Cegil','lorem ipsum','Approved' ),
    createData('Hems','lorem ipsum','Pending' )
  ];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function Request() {
  const [req,setReq]=useState([{}])
  const [user,setUser]=useState("")
  useEffect(()=>
  {
    getallRequests()
    Apicalls.getRequests().then(response=>response.data
      ).then(data=>{
        console.log(data)
        setReq(data)
      },(e)=>console.log(e))
  },[])
  const getallRequests = ()=>{

  }
  return (
            
    <div>
      <Grid container>
        <Grid item xs={3}><Sidebar/></Grid>
        <Grid item xs={9}>
        <Search />
            <div className='request_main'>
            
            <Box sx={{ width: '87%' }}>
      <Stack spacing={2}>
        <Item className='request_top'>
        <div >
                <h1>Welcome to Request Forum</h1>
                <h2>Use this space to request for new materials and to report any outdated information</h2>
                </div>
                </Item>
        <Item>
        <div className='request_bottom'>
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">User</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {req && req.map && req.map((row) => (
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                  {row?.request?.requestdesc}
                </StyledTableCell>
                <StyledTableCell align="center">{row?.user?.name}</StyledTableCell>
                <StyledTableCell align="center">Pending</StyledTableCell>

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
        <div className='add_button'>
        <Button className='add' variant="contained" startIcon={<AddIcon />} >
        Add
      </Button>
        </div>
      </Grid>
    </div>
  )
}
