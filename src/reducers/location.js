const locationReducer = (state={loading:true,locations:null,error:null}, action)=>{
    switch(action.type){
        case "GET_LOCATION":
            return {
                loading:true,
                locations:null,
                error:null
            }
        
        case "SET_LOCATION":
            return {
                loading:false,
                locations:action.payload,
                error:null
            }
        
        case "ERROR_LOCATION":
            return {
                loading:false,
                locations:null,
                error:action.error
            }
        
        default:
            return state
    }
}

export default locationReducer;