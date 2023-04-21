import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation, resetLocation } from '../actions';
import { CircularProgress, Grid } from '@mui/material';

class LocationPage extends Component {
    constructor(props){
        super(props);
        this.props.dispatch(getLocation());
    }
    
    render() { 
        return (
            <Grid container height={"100vh"} overflow="auto" pt="70px" sx={{backgroundImage:"linear-gradient(white, lightblue)"}}>
                {
                    this.props.location.loading
                    ?<><CircularProgress/></>
                    :<>
                    
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