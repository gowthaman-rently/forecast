const favouriteReducer = (state=[], action)=>{
    switch(action.type){
        case "ADD_LOCATION":
            return [...state, action.payload]
        
        case "REMOVE_LOCATION":
            const index = state.indexOf(action.payload);
            const temp_state = state.splice(index, 1);
            return temp_state

        default:
            return state
    }
}

export default favouriteReducer;