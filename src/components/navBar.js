import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
        <>
            <AppBar position="static" sx={{backgroundColor:"darkblue"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
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
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Forecast
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet/>
        </>
        );
    }
}
 
export default NavBar;