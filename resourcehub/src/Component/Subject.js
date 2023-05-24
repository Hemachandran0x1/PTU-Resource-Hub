
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
import Search from './Search';

import '../Styles/Subject.css'

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
  
  function createData(
    subject,
    code
  ) {
    return { subject, code};
  }
  
  const rows = [
    createData('Gokul','lorem ipsum'),
    createData('Gokul2','lorem ipsum'),
    createData('Gokul3','lorem ipsum'),
    createData('Gokul4','lorem ipsum'),
    createData('Gokul5','lorem ipsum'),
    createData('Gokul6','lorem ipsum'),
    createData('Gokul7','lorem ipsum'),
    createData('Gokul8','lorem ipsum'),
    createData('Gokul9','lorem ipsum')
  ];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function Subject() {
  const navigate = useNavigate();

  //const name=ReactSession.get("username");
 // const name =null        
  //if(name==null)
  //{
  //    navigate("/login")
  //}
  //else{
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
                <h1>Welcome User</h1>
                </div>
                </Item>
        <Item>
        <div className='request_bottom'>
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Subject</StyledTableCell>
              <StyledTableCell align="center">Code</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.subject}>
                <StyledTableCell component="th" scope="row">
                  {row.subject}
                </StyledTableCell>
                <StyledTableCell align="left">{row.code}</StyledTableCell>
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
      <br></br>
      <br></br>
    </div>
  )}

