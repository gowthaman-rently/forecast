import React, { Component } from 'react';

import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import RapidAPIConnect from './rapidConnect';

class FavouriteCard extends Component {
    
    state={
        location : null
    }
    async componentDidMount(){
        const resp = await RapidAPIConnect("GET","https://weatherapi-com.p.rapidapi.com/current.json",{q:this.props.location});
        this.setState({
            location : resp
        })
        console.log(resp);
    }
    render() { 
        return ( 
            <Grid item xs={10} sm={8} md={5} border={"1px solid black"} my={3} mx={"auto"} p={2} borderRadius={4} maxWidth={"300px"} bgcolor={"white"}>
                {
                    !this.state.location
                    ?<Box textAlign={"center"}>
                        <CircularProgress />
                    </Box>
                    :<>
                        <Link to={this.props.location} style={{ textDecoration: "none", color: "black", "&:hover": { bgcolor: "lightgray " } }}>
                            <Grid container>
                                <Grid item xs={6} textAlign={"start"}>
                                    <Typography component={"div"} fontWeight={"bold"}>
                                        {this.state.location.location.name}
                                    </Typography>
                                    <Typography component={"div"} fontWeight={"bold"}>
                                        {this.state.location.location.region}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} display={"flex"} justifyContent={"space-between"}>
                                    <Box textAlign={"end"} width={"100%"}>
                                        <Typography fontWeight={"bold"}>{this.state.location.current?.temp_c}°C</Typography>
                                        <Typography fontWeight={"bold"}>{this.state.location.current?.condition.text}</Typography>
                                    </Box>
                                    <Box>
                                        <img src={"https:"+this.state.location.current?.condition.icon} alt={this.state.location.current?.condition.text}/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Link>
                        <Box py={2}>
                            <Button variant='contained' size='small' onClick={this.props.removeFunc} sx={{minWidth:"32px"}}>
                                remove
                            </Button>
                        </Box>
                    </>
                }
                
            </Grid>
         );
    }
}
 
export default FavouriteCard;