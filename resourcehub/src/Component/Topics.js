import React from 'react'
import Sidebar from './Sidebar'
import Search from './Search'
import { Grid,Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
export default function Topics() {
  return (
    <div>
    <Grid container>
    <Grid xs={3}>
       <Sidebar/></Grid>
    <Grid xs={9}> 
   <div>
   <Search/>
   </div>
   <div className='topic_main'>
            <Box sx={{ width: '87%' }}>
      <Stack spacing={2}>
        <Item>
        <div className='topic_top'>
                <h1>Unit 1: </h1>
                <h2>Topic:</h2>
                </div>
                </Item>
        <Item>
        <div className='topic_bottom'>
        <h2>Text:</h2>
                <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Url</StyledTableCell>
              <StyledTableCell align="center">Contributors</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.request}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer><br></br>
<h2>PLaylist:</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Playlist</StyledTableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.request}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
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
