import { Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import {Button} from '@mui/material';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
function Credentials(props) {
    const [department, setDepartment] = useState(null);
    const [semester, setSemester] = useState(null);
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[signup,setSignup]=useState(false)
    const navigate=useNavigate();
    const handleSubmit=()=>{
      setSignup(true);
    }
    if(signup)
    {
      navigate("/");
    }
    else
    {return (
      <div >
        <Typography variant='h4' m={5} align='center'>
                Select Your Credentials
        </Typography>
        <Grid container>
            <Grid xs={4}>

            </Grid>
            <Grid xs={4}>
              <Stack m={5} spacing={6}>    
                   <Select className="selectbox" 
                placeholder='Department'
                defaultValue={department}
                onChange={setDepartment}
                options={options}
                    />
                    
                <Select className="selectbox"
                placeholder='Semester'
                defaultValue={semester}
                onChange={setSemester}
                options={options}
                    />
                </Stack>
                <Button onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
            >
              Submit
            </Button>
            </Grid>
            <Grid xs={4}>

            </Grid>
        </Grid>
        
      </div>
    );}
}

export default Credentials
//<Typography variant='h5' m={3}>
                //    Department
                //</Typography>