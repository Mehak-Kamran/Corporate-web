import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import pimage from "../assets/images/pimage.jpg";
import { Box, Typography,Grid } from '@mui/material';

const Calltoaction = () => {
  return (
    <ParallaxProvider>
      <Box sx={{ position: "relative", height: "400px", overflow: "hidden", marginBottom: "200px" }}>
        
        
        <Parallax speed={-20}>
          <Box sx={{ height: "100%", width: "100%" }}>
            <img src={pimage} alt="Parallax Background" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Box>
        </Parallax>


        <Box
          sx={{
            position: "absolute",
            top: "0%",
            left: "0%",
            right:"0%",
            bottom:"0%",
            backgroundColor:"black",
            opacity:0.5,
            
            pointerEvents: "none" 
          }}
        >
          
        </Box>
        
        
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "35%",
            transform: "translate(-50%, -35%)",
            color: "#fff",
            
            pointerEvents: "none" 
          }}
        >
            
                
                    <Typography sx={{fontSize:"20px", fontWeight:"bold"}} >Call To Action</Typography>
                    <Typography>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                
                
            
          
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "60%",
            left: "80%",
            transform: "translate(-50%, -80%)",
            color: "#fff",
            textAlign: "center",
            pointerEvents: "none" 
          }}
        >
            
                    <button style={{ border:"2px solid white",borderRadius:"8px",padding:"10px",width:"150px"}}><Typography sx={{color:"white",fontSize:"15px"}}> Call To Action</Typography></button>
                
                
          
        </Box>

        
        
      </Box>
    </ParallaxProvider>
  );
}

export default Calltoaction;
