import React from 'react'
import Sidebar from './Sidebar'
import { Grid} from '@mui/material'
import Search from './Search'

function Home() {
  return (
    <div>
         <Grid container>
      <Grid xs={3}>
            <Sidebar/></Grid>
      <Grid xs={9}> 
         <Sidebar/>
        <div>
        <Search/>
        </div>
        </Grid>
      </Grid>
  </div>
  )
}

export default Home
