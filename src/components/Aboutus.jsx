import { Grid,Container,Box,Typography,Stack } from '@mui/material'

import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Aboutus = () => {
  return (
    <Container sx={{ marginTop:"20px"}}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px",marginTop:"20px"}}>
            <Typography className="!poppins-bold" sx={{
                color:"Black",
                display:"flex",
                justifyContent:"start",
                alignItems:"start",
                fontSize:"40px",
                
                

                
            }}> About Us</Typography>
        </Box>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
<Box>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</Box>
<Box sx={{marginTop:"20px"}}>
    <Stack direction="row" >
        <item style={{marginTop:"-2px"}}><TaskAltIcon sx={{color:"#47B2E4"}}/></item>
        <item style={{marginLeft:"5px"}}><Typography>Ullamco laboris nisi ut aliquip ex ea commodo consequat</Typography></item>
    </Stack>

</Box>

<Box sx={{marginTop:"20px"}}>
    <Stack direction="row" >
        <item style={{marginTop:"-2px"}}><TaskAltIcon sx={{color:"#47B2E4"}}/></item>
        <item style={{marginLeft:"5px"}}><Typography>Duis aute irure dolor in reprehenderit in voluptate velit.</Typography></item>
    </Stack>

</Box>

<Box sx={{marginTop:"20px"}}>
    <Stack direction="row" >
        <item style={{marginTop:"-2px"}}><TaskAltIcon sx={{color:"#47B2E4"}}/></item>
        <item style={{marginLeft:"5px"}}><Typography>Ullamco laboris nisi ut aliquip ex ea commodo</Typography></item>
    </Stack>

</Box>
            </Grid>

            <Grid item xs={12} md={6}>
                <Box>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Box>
                <Box  sx={{marginTop:"10px"}}>
                    <button style={{border:"2px solid #47B2E4",padding:"8px",borderRadius:"5px",width:"170px"}}> 
                        <span style={{color:"#47B2E4",marginRight:"10px"}}> Read More</span> 
                        <ArrowForwardIcon sx={{color:"#47B2E4"}}/></button>
                </Box>

            </Grid>

        </Grid>
    </Container>
  )
}

export default Aboutus