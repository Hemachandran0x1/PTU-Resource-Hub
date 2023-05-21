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
export default function About() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Grid container>
      <Grid item xs={3}><Sidebar/></Grid>
      <Grid item xs={9}><Search/>
      <br></br>
      <Box sx={{ width: '97%' }}>
      <Stack spacing={2}>
        <Item>
        <div className='request_top'>
                <h1>About</h1>
                <h2>Welcome to the PTU College resource hub—a one-stop platform for knowledge sharing, doubt clarification, study materials, and lectures. Experience a seamless learning environment, accessing comprehensive resources to enhance your academic journey. Maximize your potential and excel with PTU College's centralized resource hub.</h2>
                </div>
                </Item>
        
                
      </Stack>
    </Box>
    </Grid>
            </Grid>
    </div>
  )
}
