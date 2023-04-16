import React from 'react'
import Sidebar from './Sidebar'
import { Box, Typography } from '@mui/material'
import Search from './Search'

function Home() {
  return (
    <div>
        <Box sx={{display:'flex'}}>
        <Sidebar/>
        <div>
        <Search/>
        </div>
        </Box>
  </div>
  )
}

export default Home
