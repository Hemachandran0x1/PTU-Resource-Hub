import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import {Button} from '@mui/material';
import { Apicalls } from './Apicalls';
import { useLocation } from 'react-router';
import { ReactSession } from 'react-client-session';

import { useMemo } from 'react';
/*const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]*/
let optionsDepartment=[];
let optionsSemester=[] ;
function Credentials(props) {
  const location =useLocation();
    const [sem,setSem]=useState([{}]);
    const [dept,setDept]=useState([{}]);
    const [department, setDepartment] = useState(null);
    const [semester, setSemester] = useState(null);
    const[username,setUsername]=useState("");
    const[useremail,setUseremail]=useState("");
    const[userpassword,setUserpassword]=useState("");
    const[signup,setSignup]=useState(false)
    const navigate=useNavigate();
   /* useMemo(() => {
  
    }, []);*/
    
    useEffect(() => {
    
      console.log(location);
      Apicalls.getDepts()
      .then(response => response.data
      ).then(data => {
      data.map((deptx)=>{optionsDepartment.push({value:deptx.id,label:deptx.deptname})});

      //optionsDepartment=data;
      }, (e) =>{
      console.log(e);
      })
    Apicalls.getSems()
    .then(response => response.data
    ).then(data => {
      data.map((semy)=>{optionsSemester.push({value:semy.id,label:semy.semester})}); 
   // optionsSemester=data;
    }, (e) =>{
    console.log(e);
    });
    
      
 },[]);
    const handleSubmit=()=>{
    
      const user ={
        name:location.state.name,
        email: location.state.email,
        password:location.state.password,
        departmentid:department.value,
        semesterid:semester.value
      };
      console.log(user);
      Apicalls.Signup(user).then(response => {
        setSignup(true)
      }) .catch(error => {
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
   
        <Grid container>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4}>
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
                onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
            >
              Submit
            </Button>
            
            </Grid>
            <Grid item xs={4}>

            </Grid>
        </Grid>
      
      </div>
    );}
}

export default Credentials
//<Typography variant='h5' m={3}>
                //    Department
                //</Typography>