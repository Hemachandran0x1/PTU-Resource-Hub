import React from 'react'
import { Drawer,List,ListItem,ListItemButton,ListItemIcon,Divider,ListItemText, Typography} from '@mui/material';//Toolbar
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import TocIcon from '@mui/icons-material/Toc';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import '@fontsource/fira-sans/600.css';
import '../Styles/Sidebar.css'

const drawerWidth = 269;

function Sidebar() {
  return ( 
    <div className='sidebarstyle' >
    <Drawer  PaperProps={{
              sx: {
               backgroundColor: "#27374D",
                color: "white"
              }
            }}
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
        <Typography className='styfam' variant='p'  sx={{fontSize:28,marginY:2,marginX:2}}>PTU Resource Hub</Typography>
        <Divider />
        <List>
        <Link to="/" style={{color:'inherit',textDecorationLine:'none'}}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon /> 
                </ListItemIcon>
               <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem></Link>
            <Link to="/contribute" style={{color:'inherit',textDecorationLine:'none'}}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ControlPointIcon/>
                </ListItemIcon>
                <ListItemText primary="Contribute" />
              </ListItemButton>
            </ListItem> </Link>
            <Link to="/request" style={{color:'inherit',textDecorationLine:'none'}}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon/> 
                </ListItemIcon>
                <ListItemText primary="Request/Report" />
              </ListItemButton>
            </ListItem></Link>
            <Link to="/requestsadd" style={{color:'inherit',textDecorationLine:'none'}}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    <TocIcon/>
                </ListItemIcon>
                <ListItemText primary="Forum" />
              </ListItemButton>
            </ListItem></Link>
            <Link to="/bookmark" style={{color:'inherit',textDecorationLine:'none'}}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BookmarkIcon/>
                </ListItemIcon>
                <ListItemText primary="Bookmark" />
              </ListItemButton>
            </ListItem> </Link>
            <Link to="/about" style={{color:'inherit',textDecorationLine:'none'}}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    <InfoIcon/>
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem></Link>
        </List>
        
      </Drawer>
      </div>
  )
}

export default Sidebar
//['Home','Contribute', 'Request/Report','About'] //key={text} 