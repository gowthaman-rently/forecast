import React, { Component } from 'react';
import { setError, setLocation } from '../actions';
import RapidAPIConnect from './rapidConnect';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import { Box, Grid, Typography } from '@mui/material';
import { createRef } from 'react';
import { Link } from 'react-router-dom';

// redux thunk
const searchLocation = (query) => {
    return (dispatch) => {
        RapidAPIConnect("GET", "https://weatherapi-com.p.rapidapi.com/search.json", { q: query }).then(
            resp => {
                dispatch(setLocation(resp))
            },
            error => {
                dispatch(setError(error))
            }
        )
    }
}


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.searchInput = createRef();
        this.searchResult = createRef();
    }

    search(event) {
        const searchInput = this.searchInput.current;
        const searchResult = this.searchResult.current;

        searchResult.style.display = "block";
        if (searchInput.value.length === 0) {
            searchResult.style.display = "none";
            return;
        }
        this.props.dispatch(searchLocation(event.target.value))
    }


    render() {
        return (
            <Box sx={{ backgroundImage: "linear-gradient(white, lightblue)" }} height={"100vh"}>
              
            <Grid container pt={10} pb={1} >
                <Grid item m={"auto"} xs={11} sm={10} md={8} lg={6} xl={4} height={"10px"} position={"relative"}>
                    <TextField
                        id="filled-search"
                        placeholder="Search location name"
                        type="search"
                        variant="outlined"
                        onInput={(event) => this.search(event)}
                        inputRef={this.searchInput}
                        sx={{
                            "fieldset": {
                                borderRadius: "10px",
                                borderColor: "darkblue",
                                borderWidth: "2px",
                                "&hover": {
                                    borderColor: "darkblue"
                                }
                            },
                            "input": {
                                paddingX: "20px",
                                borderRadius: "10px"
                            },
                            "width": "100%"
                        }}
                        autoComplete='off'
                    />
                    <Box sx={{ display: "none", position: "absolute", width: "100%", bgcolor: "white", boxShadow: "10px", border: "1px solid black", borderRadius: "10px" }} ref={this.searchResult}>
                        {
                            (
                                !this.props.location.loading
                                && Array.isArray(this.props.location.locations)
                                && this.props.location.locations.length !== 0
                            )
                                ? this.props.location.locations.map((item) => {
                                    return <Box key={item.id} textAlign="start" py={1} px={3} borderBottom={"1px solid gray"} mx={1}>
                                        <Link to={`/${item.url}`} style={{ textDecoration: "none", color: "black", "&:hover": { bgcolor: "lightgray " } }}>
                                            <Typography component={"div"} variant='subtitle1'>
                                                {`${item.name}, ${item.region}, ${item.country}`}
                                            </Typography>
                                        </Link>
                                    </Box>
                                })
                                : <Box textAlign="start" py={1} px={3} borderBottom={"1px solid gray"} mx={1}>
                                    <Typography component={"div"} variant='subtitle1'>
                                        No results
                                    </Typography>
                                </Box>
                        }
                    </Box>
                </Grid>
                <Grid item xs={12} >
                    <Typography component={"div"} variant='h5' fontWeight={"bold"} borderBottom={"2px solid darkblue"} color={"darkblue"} py={3} marginTop={10}>
                        Favourite
                    </Typography>
                </Grid>
                {/* {console.log(this.props)} */}
                {
                    this.props.favourite.length !== 0
                        ? this.props.favourite.map((ele, ind)=>{
                            return <Grid item xs={12} key={ind}>
                                <Link to={`/${ele}`} style={{ textDecoration: "none", color: "black", "&:hover": { bgcolor: "lightgray " } }}>
                                    <Typography component={"div"} variant='subtitle1' fontWeight={"bold"} fontSize={20}>
                                        {`${ele}`}
                                    </Typography>
                                </Link>
                            </Grid>
                        })
                        : <Grid item xs={12}>
                            <Typography component={"div"} variant='h6'>
                                No Locations added
                            </Typography>
                        </Grid>
                }
            </Grid>
        </Box>
        );
    }
}

const mapStateToProps = (state) => {
    return (state)
}

export default connect(mapStateToProps)(HomePage);