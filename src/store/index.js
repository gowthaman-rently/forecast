import { createStore } from "redux";
import allReducer from "../reducers";
import { applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";

const store = createStore(
    allReducer,
    applyMiddleware(ThunkMiddleware)
);

export default store;