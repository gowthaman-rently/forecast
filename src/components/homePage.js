import React, { Component } from 'react';
import { getLocation, setError, setLocation } from '../actions';
import RapidAPIConnect from './rapidConnect';
import { connect } from 'react-redux';
import store from '../store';
import TextField from '@mui/material/TextField';



const fetchLocation = (query)=>{
    return (dispatch)=>{
        RapidAPIConnect("GET","https://weatherapi-com.p.rapidapi.com/search.json",{q: query}).then(
            resp=>{
                dispatch(setLocation(resp))
            },
            error=>{
                dispatch(setError(error))
            }
        )
    }
}

class HomePage extends Component {
    constructor(){}

    search(event){
        this.props.dispatch(fetchLocation(event.target.value))
    }

    render() {
        console.log(this.props);
        return (
            <>
                <TextField
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                    onInput={this.search}
                />
            </>
        );
    }
}

const mapStateToProps = (state, parentProps) =>{
    return(state)
}

export default connect(mapStateToProps)(HomePage);