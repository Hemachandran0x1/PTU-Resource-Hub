import { Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Select from 'react-select';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
function Credentials() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
      <div >
        <Typography variant='h4' m={5} align='center'>
                Select Your Credentials
        </Typography>
        <Grid container>
            <Grid xs={3}>

            </Grid>
            <Grid xs={6}>
              <Stack m={5} spacing={6}>    
                   <Select className="selectbox" 
                placeholder='Department'
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                    />
                    
                <Select className="selectbox"
                placeholder='Semester'
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                    />
                </Stack>
            </Grid>
            <Grid xs={3}>

            </Grid>
        </Grid>
        
      </div>
    );
}

export default Credentials
//<Typography variant='h5' m={3}>
                //    Department
                //</Typography>