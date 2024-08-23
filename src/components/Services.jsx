import React from 'react'
import { AppBar, Toolbar, Box ,Container,Typography,Button, Grid,Stack} from '@mui/material';
import LineAxisIcon from '@mui/icons-material/LineAxis'; 
import { motion } from "framer-motion"; 

const Services = () => {
  return (
    <Box sx={{backgroundColor:"#F5F6F8" , height:"500px",display:"flex" ,justifyContent:"center",alignItems:"center",marginTop:"50px",marginBottom:"50px"}}>
        <Container>
         <Box sx={{marginTop:"50px",display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
         <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, duration: 3, delay: 0.5 }}
                    >
         <Typography className="!poppins-bold font" sx={{
                color:"#37517E",
                display:"flex",
                justifyContent:"start",
                alignItems:"start",
                fontSize:"40px",
                fontWeight:"bold"
                
                

                
            }} id="services">Services</Typography>
            </motion.div>
         <Typography sx={{marginTop:"10px", marginBottom:"10px"}}> Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</Typography>
        </Box>

        <Box sx={{marginBottom:"20px" , marginTop:"20px"}}>
            <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            
                <item>
                <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, duration: 3, delay: 0.5 }}
                    >
                    <Box sx={{width:"300px",backgroundColor:"white",padding:"10px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    
                        <Box>
                        <Box><LineAxisIcon/></Box>
                            <Typography sx={{fontWeight:"bold",marginBottom:"5px"}}>Lorem Ipsum</Typography>
                            <Typography>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint</Typography>
                        </Box>
                    </Box>
                    </motion.div>
                  
                </item>
                
                <item>
                <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, duration: 3, delay: 0.5 }}
                    >
                    <Box sx={{width:"300px",backgroundColor:"white",padding:"10px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    
                        <Box>
                        <Box><LineAxisIcon/></Box>
                            <Typography sx={{fontWeight:"bold",marginBottom:"5px"}}>Lorem Ipsum</Typography>
                            <Typography>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint</Typography>
                        </Box>
                        
                    </Box>
                    </motion.div>
                    
                </item>
                <item>
                <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, duration: 3, delay: 0.5 }}
                    >
                    <Box sx={{width:"300px",backgroundColor:"white",padding:"10px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    
                        <Box>
                        <Box><LineAxisIcon/></Box>
                            <Typography sx={{fontWeight:"bold",marginBottom:"5px"}}>Lorem Ipsum</Typography>
                            <Typography>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint</Typography>
                        </Box>
                        
                    </Box>
                    </motion.div>
                </item>
                <item>
                <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, duration: 3, delay: 0.5 }}
                    >
                    <Box sx={{width:"300px",backgroundColor:"white",padding:"10px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    
                        <Box>
                        <Box><LineAxisIcon/></Box>
                            <Typography sx={{fontWeight:"bold",marginBottom:"5px"}}>Lorem Ipsum</Typography>
                            <Typography>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint</Typography>
                        </Box>
                        
                    </Box>
                    </motion.div>
                </item>
            </Stack>
        </Box>
        </Container>

    </Box>
  )
}

export default Services