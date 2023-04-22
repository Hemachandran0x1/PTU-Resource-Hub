import React from 'react'
import Sidebar from './Sidebar';
import Search from './Search';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

export default function About() {
  return (
    <div>
      <Grid container>
      <Grid item xs={3}><Sidebar/></Grid>
      <Grid item xs={9}><Search/></Grid>
            
            
            </Grid>
    </div>
  )
}
