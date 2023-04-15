import React from 'react'
import { Drawer,List,ListItem,ListItemButton,ListItemIcon,Divider,ListItemText, Typography } from '@mui/material';//Toolbar
import MailIcon from '@mui/icons-material/Mail';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
const drawerWidth = 240;
function Sidebar() {
  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant='p'  sx={{fontSize:28,marginY:2,marginX:2}}>Ptu Resource Hub</Typography>
        <Divider />
        <List>
          {['Home','Contribute', 'Request/Report','About'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <HomeIcon/> : index ===1 ?<ControlPointIcon/>:index===2 ? <MailIcon/> : <InfoIcon/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      </Drawer>
  )
}

export default Sidebar
