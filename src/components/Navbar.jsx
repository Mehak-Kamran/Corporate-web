import React, { useState } from 'react'; 
import AppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar'; 
import Typography from '@mui/material/Typography'; 
import Button from '@mui/material/Button'; 
import IconButton from '@mui/material/IconButton'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import Drawer from '@mui/material/Drawer'; 
import List from '@mui/material/List'; 
import ListItem from '@mui/material/ListItem'; 
import ListItemText from '@mui/material/ListItemText'; 
import Box from '@mui/material/Box';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { text: 'Home', href: '#home' },
        { text: 'About Us', href: '#about' },
        { text: 'Services', href: '#services' },
        { text: 'Call to Action', href: '#cta' },
        { text: 'Portfolio', href: '#portfolio' },
    ];

    return (
        <AppBar position="fixed" sx={{backgroundColor:"#37517E"}} >
            <Toolbar >
                <IconButton
                    edge="start"
                    
                    aria-label="menu"
                    onClick={toggleDrawer}
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Website
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {menuItems.map((item) => (
                        <Button key={item.text} color="inherit" href={item.href}>
                            {item.text}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <List>
                    {menuItems.map((item) => (
                        <ListItem button key={item.text} onClick={toggleDrawer}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
