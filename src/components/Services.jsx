import React from 'react'
import { AppBar, Toolbar, Box ,Container,Typography,Button, Grid,Stack} from '@mui/material';
import LineAxisIcon from '@mui/icons-material/LineAxis'; 

const Services = () => {
  return (
    <Box sx={{backgroundColor:"#F5F6F8" , height:"500px",display:"flex" ,justifyContent:"center",alignItems:"center",marginTop:"50px",marginBottom:"50px"}}>
        <Container>
         <Box sx={{marginTop:"50px",display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
         <Typography className="!poppins-bold" sx={{
                color:"Black",
                
                fontSize:"40px",}}>Services</Typography>
         <Typography sx={{marginTop:"10px", marginBottom:"10px"}}> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</Typography>
        </Box>

        <Box sx={{marginBottom:"20px" , marginTop:"20px"}}>
            <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <item>
                    <Box sx={{width:"300px",backgroundColor:"white",padding:"10px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        
                        <Box>
                        <Box><LineAxisIcon/></Box>
                            <Typography sx={{fontWeight:"bold",marginBottom:"5px"}}>Lorem Ipsum</Typography>
                            <Typography>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint</Typography>
                        </Box>
                    </Box>
                </item>
                <item>
                    <Box sx={{width:"300px",backgroundColor:"white",padding:"10px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        
                        <Box>
                        <Box><LineAxisIcon/></Box>
                            <Typography sx={{fontWeight:"bold",marginBottom:"5px"}}>Lorem Ipsum</Typography>
                            <Typography>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint</Typography>
                        </Box>
                    </Box>
                </item>
                <item>
                    <Box sx={{width:"300px",backgroundColor:"white",padding:"10px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        
                        <Box>
                        <Box><LineAxisIcon/></Box>
                            <Typography sx={{fontWeight:"bold",marginBottom:"5px"}}>Lorem Ipsum</Typography>
                            <Typography>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint</Typography>
                        </Box>
                    </Box>
                </item>
                <item>
                    <Box sx={{width:"300px",backgroundColor:"white",padding:"10px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        
                        <Box>
                        <Box><LineAxisIcon/></Box>
                            <Typography sx={{fontWeight:"bold",marginBottom:"5px"}}>Lorem Ipsum</Typography>
                            <Typography>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint</Typography>
                        </Box>
                    </Box>
                </item>
            </Stack>
        </Box>
        </Container>

    </Box>
  )
}

export default Services