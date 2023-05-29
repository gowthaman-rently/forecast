const favouriteReducer = (state=[], action)=>{
    switch(action.type){
        case "ADD_LOCATION":
            return [...state, action.payload]
        
        case "REMOVE_LOCATION":
            let tempState = state.filter(ele=>ele!==action.payload)
            return tempState

        default:
            return state
    }
}

export default favouriteReducer;