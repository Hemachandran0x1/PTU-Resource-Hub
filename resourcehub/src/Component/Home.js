import React from 'react'
import Sidebar from './Sidebar'
import { Box, Typography } from '@mui/material'

function Home() {
  return (
    <div>
        <Box sx={{display:'flex'}}>
        <Sidebar/>
        <div>
        <Typography variant='h2' align='center'>Home</Typography> 
        </div>
        </Box>
  </div>
  )
}

export default Home
