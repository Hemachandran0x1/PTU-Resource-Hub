import React, { Component } from 'react';
import {Grid,Box} from '@mui/material';
import '../Styles/contribute.css'
import img1 from '../assets/greentick.png';
import '../Styles/contributeauth.css';
import Sidebar from './Sidebar';
class ContributeAuth extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <Box sx={{display:'flex'}}>
            <Sidebar/>
            <div>
            <Grid container>
                    <Grid item xs={2}>
                       
                    </Grid>
                    <Grid item xs={10}>
                        <div className='imgcol'>
                    <img src={img1} alt="" />
                  
                    </div>
                    <h1>First step authentication successful ! </h1>
                    <h2> Thank you for contributing!</h2>
                    <div>
                        <h2>You will receive an email regarding the status of your contribution.
                            Until then keep learning !
                        </h2>
                    </div>
                      


                    </Grid>
                   
                </Grid>
                </div>
                </Box>
        );
    }
}
 
export default ContributeAuth;