import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import {Button} from '@mui/material';
import {Box} from '@mui/material';
import { Apicalls } from './Apicalls';
import { useLocation } from 'react-router';
const optionsDepartment = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const optionsSemester = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
function Credentials(props) {
    const location =useLocation();
    const [department, setDepartment] = useState(null);
    const [semester, setSemester] = useState(null);
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[signup,setSignup]=useState(false)
    const navigate=useNavigate();
    useEffect(() => {
      setName(location.state.name);
      setEmail(location.state.email);
      setPassword(location.state.password);      
      console.log(location);
 });
    const handleSubmit=(event)=>{
    
      const user ={
        name:name,
        email: email,
        password:password,
        departmentid:department.value,
        semesterid:semester.value
      };
      console.log(user);
      Apicalls.Signup(user).then(response => {
        const { id, name, email,password,departmenid,semesterid, role } = response.data;
        setSignup(true)}) .catch(error => {
          //handleLogError(error)
          const error1=error;
          //console.log("WEAFADASDFAS")
         // console.log(data);
        });
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
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container>
            <Grid xs={4}>

            </Grid>
            <Grid xs={4}>
              <Stack m={5} spacing={6}>    
                   <Select className="selectbox" 
                placeholder='Department'
                defaultValue={department}
                onChange={setDepartment}
                options={optionsDepartment}
                    />
                    
                <Select className="selectbox"
                placeholder='Semester'
                defaultValue={semester}
                onChange={setSemester}
                options={optionsSemester}
                    />
                </Stack>
                <Button 
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
        </Box>
      </div>
    );}
}

export default Credentials
//<Typography variant='h5' m={3}>
                //    Department
                //</Typography>