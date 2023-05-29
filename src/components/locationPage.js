import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation, addLocation, removeLocation } from '../actions';
import { CircularProgress, Grid, Typography, Button } from '@mui/material';

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
                            :<>
                                <Grid item textAlign={"start"} xs={6} md={6}  pt="20px" px={20}>
                                    <Typography fontWeight={"bold"} fontSize={30}>{locations.location?.name}</Typography>
                                    <Typography fontSize={18}>{locations.location?.region + "," +locations.location?.country}</Typography>
                                </Grid>
                                <Grid item textAlign={"end"} xs={5} md={6}  pt="20px" px={20}>
                                    <Typography fontWeight={"bold"} fontSize={25}>{locations.current?.temp_c}°C</Typography>
                                    <Typography fontWeight={"bold"} fontSize={18}>{locations.current?.condition.text}</Typography>
                                </Grid>
                                <Grid item textAlign={"center"} xs={12} >
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
                            </>
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