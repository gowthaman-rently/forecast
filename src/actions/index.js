// Location

export const getLocation = () =>{
    return{
        type : "GET_LOCATION"
    }
}

export const setLocation = (location) =>{
    return{
        type : "SET_LOCATION",
        payload : location
    }
}

export const setError = (error) =>{
    return{
        type : "ERROR_LOCATION",
        error
    }
}

export const resetLocation = (error) =>{
    return{
        type : "RESET_LOCATION",
        error
    }
}

// Favourite

export const addLocation = (location) =>{
    return{
        type:"ADD_LOCATION",
        payload : location
    }
}

export const removeLocation = (location) =>{
    return{
        type : "REMOVE_LOCATION",
        payload : location
    }
}
