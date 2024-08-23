import React from 'react'
import { AppBar, Toolbar, Box ,Container,Typography,Button, Grid,Stack} from '@mui/material'; 
import hero from "../assets/images/hero.png"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { motion } from 'framer-motion'; // Import motion
const Banner = () => {
  return (
    <Box id="home">
     <Grid container spacing={2} sx={{
        backgroundColor:"#37517E",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
        height:"700px"
     }}>
     <Grid item xs={12} md={6} >
      <Box sx={{margin:"50px"}}>
      <Typography className="!poppins-bold" sx={{
                color:"white",
                display:"flex",
                justifyContent:"start",
                alignItems:"start",
                fontSize:"55px",
                
                

                
            }}>
            Better Solutions For
            </Typography>
            <Typography className="!poppins-bold" sx={{
                color:"white",
                display:"flex",
                justifyContent:"start",
                alignItems:"start",
                fontSize:"55px",
                }}>
            Your Business
            </Typography>
            
            <Typography className="!poppins-bold" sx={{
                color:"#C3CBD9",
                display:"flex",
                justifyContent:"start",
                alignItems:"start",
                fontSize:"25px",
                }}>
            We are team of talented designers making websites with Bootstrap
            </Typography>
            

      </Box>
      <Box>
        <Stack direction="row" spacing={4} sx={{ margin:"50px"}}>
          <item><button className="!poppins-bold" style={{borderRadius:"30px", padding:"10px",width:"120px", backgroundColor:"#47B2E4",color:"white"}}>
              Get Started
            </button></item>
            <item>
              <PlayCircleOutlineIcon style={{ fontSize:"45px",color:"white",display:"flex",position:"absolute"}} />
              <Typography className="!poppins-bold" sx={{fontSize:"20px", fontWeight:"semibold" ,marginTop:"10px",color:"white",justifyContent:"left",position:"relative",left:"50%",top:"3%"}}>Watch video</Typography>
              
            </item>
            
          
        </Stack>
      </Box>
  </Grid>

        <Grid item xs={12} md={6}>
        <motion.img
            src={hero}
            alt="Hero"
            style={{ width: '500px' }}
            animate={{
              y: [0, -20, 0], // Moves the image up 20px and then back down
            }}
            transition={{
              duration: 2, // The animation duration in seconds
              repeat: Infinity, // Makes the animation repeat infinitely
              repeatType: "loop", // Loops the animation
            }}
          />
        </Grid>

     </Grid>
    </Box>
  )
}

export default Banner