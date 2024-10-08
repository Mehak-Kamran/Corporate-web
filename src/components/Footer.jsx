import { Typography,Grid,Stack,Box,Container } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React from 'react'

const hi = () => {
  return (
    <Container sx={{backgroundColor:"#F5F6F8" }}>
        <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
                <Stack direction="column">
                    <item><Typography sx={{fontSize:"25px",fontWeight:"bold",color:"#3C4C69",marginBottom:"5px"}}>ARPHA</Typography></item>
                    <item><Typography sx={{marginBottom:"5px"}}>A108 Adam Street<br/>New York, NY 535022</Typography></item>
                    <item>Phone: +1 5589 55488 55</item>
                    <item>Email: info@example.com</item>
                </Stack>
                 

            </Grid>
            <Grid item md={3} xs={12}>
                <Stack>
                    <item><Typography sx={{fontSize:"20px",fontWeight:"bold",color:"#3C4C69",marginBottom:"5px"}}>Useful Links</Typography></item>
                    <item> 
                        <Stack direction="row"> 
                            <item><KeyboardArrowRightIcon sx={{fontSize:"15px",marginBottom:"6px"}}/></item>
                            <item><Typography sx={{fontSize:"15px",fontWeight:"semibold",color:"#3C4C69",marginBottom:"5px"}}><a href="#home"> Home</a></Typography></item>
                            </Stack>
                    </item>
                    <item>
                    <Stack direction="row"> 
                            <item><KeyboardArrowRightIcon sx={{fontSize:"15px",marginBottom:"6px"}}/></item>
                            <item><Typography sx={{fontSize:"15px",fontWeight:"semibold",color:"#3C4C69",marginBottom:"5px"}}><a href="#aboutus">About Us</a></Typography></item>
                            </Stack>
                    </item>

                    <item>
                    <Stack direction="row"> 
                            <item><KeyboardArrowRightIcon sx={{fontSize:"15px",marginBottom:"6px"}}/></item>
                            <item><Typography sx={{fontSize:"15px",fontWeight:"semibold",color:"#3C4C69",marginBottom:"5px"}}><a href="#services">Services</a></Typography></item>
                            </Stack>
                    </item>

                    <item>
                    <Stack direction="row"> 
                            <item><KeyboardArrowRightIcon sx={{fontSize:"15px",marginBottom:"6px"}}/></item>
                            <item><Typography sx={{fontSize:"15px",fontWeight:"semibold",color:"#3C4C69",marginBottom:"5px"}}> <a href="#portfolio"> Portfolio</a></Typography></item>
                            </Stack>
                    </item>
                </Stack>

            </Grid>

            <Grid item md={3} xs={12}>
                <Stack>
                    <item><Typography sx={{fontSize:"20px",fontWeight:"bold",color:"#3C4C69",marginBottom:"5px"}}>Our Services</Typography></item>
                    <item> 
                        <Stack direction="row"> 
                            <item><KeyboardArrowRightIcon sx={{fontSize:"15px",marginBottom:"6px"}}/></item>
                            <item><Typography sx={{fontSize:"15px",fontWeight:"semibold",color:"#3C4C69",marginBottom:"5px"}}>Web Design</Typography></item>
                            </Stack>
                    </item>
                    <item>
                    <Stack direction="row"> 
                            <item><KeyboardArrowRightIcon sx={{fontSize:"15px",marginBottom:"6px"}}/></item>
                            <item><Typography sx={{fontSize:"15px",fontWeight:"semibold",color:"#3C4C69",marginBottom:"5px"}}>Web Development</Typography></item>
                            </Stack>
                    </item>

                    <item>
                    <Stack direction="row"> 
                            <item><KeyboardArrowRightIcon sx={{fontSize:"15px",marginBottom:"6px"}}/></item>
                            <item><Typography sx={{fontSize:"15px",fontWeight:"semibold",color:"#3C4C69",marginBottom:"5px"}}>Product Management</Typography></item>
                            </Stack>
                    </item>

                    <item>
                    <Stack direction="row"> 
                            <item><KeyboardArrowRightIcon sx={{fontSize:"15px",marginBottom:"6px"}}/></item>
                            <item><Typography sx={{fontSize:"15px",fontWeight:"semibold",color:"#3C4C69",marginBottom:"5px"}}>Marketing</Typography></item>
                            </Stack>
                    </item>
                </Stack>

            </Grid>
           
        </Grid>
        <Box>
            <hr/>
            <Typography sx={{textAlign:"center",marginTop:"20px",fontSize:"15px",padding:"10px"}}>© Copyright Arsha All Rights Reserved</Typography>
        </Box>
    </Container>
  )
}

export default hi