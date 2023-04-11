import { combineReducers } from "redux";
import locationReducer from "./location";
import favouriteReducer from "./favourite";

const allReducer = combineReducers({
    location:locationReducer,
    favourite : favouriteReducer
});

export default allReducer;

