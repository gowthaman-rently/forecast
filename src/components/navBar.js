import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, Outlet } from 'react-router-dom';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
        <>
            <AppBar position="fixed" sx={{backgroundColor:"darkblue"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Link to="/" style={{textDecoration:"none"}}>
                            <Typography
                                variant="h5"
                                noWrap
                                component="p"
                                sx={{
                                    mr: 2,
                                    display: "flex",
                                    flexGrow: 1,
                                    fontWeight: 700,
                                    letterSpacing: '.05rem',
                                    color: 'white'
                                }}
                            >
                                Forecast
                            </Typography>
                        </Link>                        
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet/>
        </>
        );
    }
}
 
export default NavBar;