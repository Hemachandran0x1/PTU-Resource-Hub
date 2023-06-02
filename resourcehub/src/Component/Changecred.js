import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Apicalls } from './Apicalls';
import { useLocation } from 'react-router';
import { ReactSession } from 'react-client-session';
let optionsDepartment=[];
let optionsSemester=[] ;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Changecred(props) {


    const [department, setDepartment] = useState(null);
    const [semester, setSemester] = useState(null);
  
    const[signup,setSignup]=useState(false)
    const navigate=useNavigate();
   /* useMemo(() => {
  
    }, []);*/
    
    useEffect(() => {
    
     
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
        id:ReactSession.get("userid"),
        name:ReactSession.get("username"),
        email: ReactSession.get("email"),
        password:ReactSession.get("pass"),
        departmentid:department.value,
        semesterid:semester.value,
        role:ReactSession.get("role")
      };
      console.log(user);
      Apicalls.updateUser(user,user.id).then(response => {
        const { id, name, email,password,departmentid,semesterid, role } = response.data;
        ReactSession.set("sem",semesterid)
        ReactSession.set("dept",departmentid)
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
   
        <Grid container>
            <Grid item xs={3}>
<div className='container'>
<div className='highlight'>
<h1 style={{marginLeft:'65px',marginBottom:'-5px'}}>PTU</h1>
<h1 style={{marginLeft:'12px',marginBottom:'-5px',marginTop:'-5px'}}>RESOURCE</h1>
<h1 style={{marginLeft:'64px',marginTop:'-5px'}}>HUB</h1>
</div>
</div>
              </Grid>
            <Grid item xs={7}>            
            <Box sx={{ width: '80%' }} >
      <Stack spacing={2}>
        <Item className='request_top' style={{borderRadius:'42px',marginTop:'150px',marginLeft:'20px'}}>
        <div >
        <br></br>
        <Typography variant='h4' m={5} align='center'>
                Select Your Credentials
        </Typography>
              <Stack m={5} spacing={6}>    
                   <Select className="selectbox4" 
                placeholder='Department'
                defaultValue={department}
                onChange={setDepartment}
                options={optionsDepartment}
                    />
                    
                <Select className="selectbox4"
                placeholder='Semester'
                defaultValue={semester}
                onChange={setSemester}
                options={optionsSemester}
                    />
                </Stack>
                <Button className='icon2'
                onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
            >
              Submit
            </Button>
                </div>
                </Item>
                </Stack>
                </Box>            
            </Grid>
            <Grid item xs={4}>

            </Grid>
        </Grid>
      
      </div>
    );}
}

export default Changecred
