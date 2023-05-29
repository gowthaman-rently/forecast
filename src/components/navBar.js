import React, { Component } from 'react';
import {AppBar, Toolbar , Typography , Container} from '@mui/material';
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