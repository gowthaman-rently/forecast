import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation, addLocation, removeLocation } from '../actions';
import { CircularProgress, Grid, Typography, Button, Box } from '@mui/material';

class LocationPage extends Component {
    constructor(props){
        super(props);
        this.props.dispatch(getLocation());
    }
    
    render() { 
        const locations = this.props.location.locations;
        return (
            <Grid container height={"100vh"} overflow="auto" pt="70px" sx={{backgroundImage:"linear-gradient(white, lightblue)"}}>
                {
                    this.props.location.loading 
                    ?<Grid item textAlign={"center"} xs={12}  pt="20px"><CircularProgress/></Grid>
                    :<>
                        {
                            this.props.location.error
                            ?<Grid item textAlign={"center"} xs={12}  pt="20px">
                                <Typography fontSize="larger" fontWeight="bold" color="darkblue"  >Internal Server Error</Typography>
                                <Typography fontSize="medium" color="darkblue"  >Please try again after sometime</Typography>
                            </Grid>
                            :<Grid item xs={11} lg={8} mx={"auto"}>
                                <Grid container  py="40px" >
                                    {console.log(this.props)}
                                    
                                    <Grid container bgcolor={"white"} borderRadius={4} textAlign={"start"} mt={3} p={3}>
                                        <Grid item textAlign={"start"} xs={6} paddingBottom={3}>
                                            <Typography fontWeight={"bold"} fontSize={30}>{locations.location?.name}</Typography>
                                            <Typography fontSize={18}>{locations.location?.region + "," +locations.location?.country}</Typography>
                                        </Grid>
                                        <Grid item textAlign={"end"} xs={6} display={"flex"} justifyContent={"end"} paddingBottom={3}>
                                            <Box>
                                                <Typography fontWeight={"bold"} fontSize={25}>{locations.current?.temp_c}°C</Typography>
                                                <Typography fontWeight={"bold"} fontSize={18}>{locations.current?.condition.text}</Typography>
                                            </Box>
                                            <Box>
                                                <img src={"https:"+locations.current?.condition.icon} alt={locations.current?.condition.text}/>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} md={3} borderBottom={"solid 1px black"} paddingBottom={1} paddingTop={2}>
                                            <Typography fontWeight={"bold"} >Feels Like</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3} borderBottom={"solid 1px black"} paddingBottom={1} paddingTop={2} textAlign={"end"} paddingRight={4}>
                                            <Typography fontWeight={"bold"} >{locations.current?.feelslike_c} °C</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3} borderBottom={"solid 1px black"} paddingBottom={1} paddingTop={2}>
                                            <Typography fontWeight={"bold"} >Humidity</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3} borderBottom={"solid 1px black"} paddingBottom={1} paddingTop={2} textAlign={"end"} paddingRight={4}>
                                            <Typography fontWeight={"bold"} >{locations.current?.humidity}%</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3} borderBottom={"solid 1px black"} paddingBottom={1} paddingTop={2} >
                                            <Typography fontWeight={"bold"} >Pressure</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3} borderBottom={"solid 1px black"} paddingBottom={1} paddingTop={2} textAlign={"end"} paddingRight={4}>
                                            <Typography fontWeight={"bold"} >{locations.current?.pressure_mb} mb</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3} borderBottom={"solid 1px black"} paddingBottom={1} paddingTop={2}>
                                            <Typography fontWeight={"bold"} >Wind</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3} borderBottom={"solid 1px black"} paddingBottom={1} paddingTop={2} textAlign={"end"} paddingRight={4}>
                                            <Typography fontWeight={"bold"} >{locations.current?.wind_kph} km/h</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3} borderBottom={"solid 1px black"} paddingBottom={1} paddingTop={2}>
                                            <Typography fontWeight={"bold"} >UV Index</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3} borderBottom={"solid 1px black"} paddingBottom={1} paddingTop={2} textAlign={"end"} paddingRight={4}>
                                            <Typography fontWeight={"bold"} >{locations.current?.uv}</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3} borderBottom={"solid 1px black"} paddingBottom={1} paddingTop={2}>
                                            <Typography fontWeight={"bold"} >Visibility</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={3} borderBottom={"solid 1px black"} paddingBottom={1} paddingTop={2} textAlign={"end"} paddingRight={4}>
                                            <Typography fontWeight={"bold"} >{locations.current?.vis_km} km</Typography>
                                        </Grid>
                                        <Grid item xs={12} paddingTop={8} borderBottom={"solid 1px black"}>
                                            <Typography variant={"h5"} fontWeight={"bold"}  >Hourly</Typography>
                                        </Grid>
                                        <Grid item xs={12} paddingTop={2} display={"flex"} overflow={"auto"}>
                                            {
                                                locations.forecast?.forecastday[0].hour.map((item, ind)=>{
                                                    return <Box key={ind} textAlign={"center"} px={3}>
                                                        <Typography fontWeight={"bold"} color={"darkgray"}>{item.time.split(" ")[1]}</Typography>
                                                        <Typography fontWeight={"bold"}>{item.feelslike_c}°C</Typography>
                                                        <img src={"https://"+item.condition.icon} alt={item.condition.text}/>
                                                        <Typography>{item.humidity}%</Typography>
                                                    </Box>
                                                })
                                            }

                                        </Grid>
                                        <Grid item xs={12} paddingTop={2} borderBottom={"solid 1px black"}>
                                            <Typography variant={"h5"} fontWeight={"bold"}  >Tomorrow</Typography>
                                        </Grid>
                                        <Grid item xs={12} paddingTop={2} display={"flex"} overflow={"auto"}>
                                            {
                                                locations.forecast?.forecastday[1].hour.map((item, ind)=>{
                                                    return <Box key={ind} textAlign={"center"} px={3}>
                                                        <Typography fontWeight={"bold"} color={"darkgray"}>{item.time.split(" ")[1]}</Typography>
                                                        <Typography fontWeight={"bold"}>{item.feelslike_c}°C</Typography>
                                                        <img src={"https://"+item.condition.icon} alt={item.condition.text}/>
                                                        <Typography>{item.humidity}%</Typography>
                                                    </Box>
                                                })
                                            }

                                        </Grid>
                                    </Grid>   
                                    <Grid item textAlign={"center"} xs={12} mt={3} >
                                        {
                                            this.props.favourite.find(ele=>ele===locations.location?.name)
                                            ?<Button aria-label="delete" size="large" variant='contained' onClick={()=>{this.props.dispatch(removeLocation(locations.location.name))}}>
                                                Remove from favourite
                                            </Button>
                                            :<Button aria-label="delete" size="large" variant='contained' onClick={()=>{this.props.dispatch(addLocation(locations.location.name))}}>
                                                Add to favourite
                                            </Button>
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        }
                    </>
                }
            </Grid>
        );
    }
}

const mapStateToProps = (state) =>{
    return(state)
}
 
export default connect(mapStateToProps)(LocationPage);