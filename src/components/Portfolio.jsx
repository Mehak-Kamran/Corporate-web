import * as React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import portfolio1 from "../assets/images/portfolio1.jpg"
import portfolio2 from "../assets/images/portfolio2.jpg"
import portfolio3 from "../assets/images/portfolio3.jpg"
import portfolio4 from "../assets/images/portfolio4.jpg"
import portfolio5 from "../assets/images/portfolio5.jpg"
import portfolio6 from "../assets/images/portfolio6.jpg"
import portfolio7 from "../assets/images/portfolio7.jpg"
import portfolio8 from "../assets/images/portfolio8.jpg"
import { Typography,Box,Container } from '@mui/material';
import { motion } from "framer-motion"; 

const Portfolio=()=> {
  return (
    <Container sx={{marginBottom:"100px"}}>

<Box sx={{marginBottom:"20px"}}>
<motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, duration: 3, delay: 0.5 }}
                    >
    <Typography className="!poppins-bold font" id="portfolio" sx={{
                color:"#37517E",
                textAlign:"center",
                fontSize:"40px",
                fontWeight:"bold"
                
                

                
            }}> Portfolio</Typography>
                </motion.div>
</Box>

<Box sx={{ }}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Container>
    
    
  );
}

const itemData = [
  {
    img: portfolio1,
    title: 'Bed',
    
  },
  {
    img: portfolio2,
    title: 'Books',
    
  },
  {
    img: portfolio3,
    title: 'Sink',
    
  },
  {
    img: portfolio4,
    title: 'Kitchen',
    
  },
  {
    img: portfolio5,
    title: 'Blinds',
    
  },
  {
    img: portfolio6,
    title: 'Chairs',
    
  },
  {
    img: portfolio7,
    title: 'Laptop',
    
  },
  {
    img: portfolio8 ,
    title: 'Doors',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    
  },
];

export default Portfolio