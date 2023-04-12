import { createStore, applyMiddleware , compose} from "redux";
import allReducer from "../reducers";
import ThunkMiddleware from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducer,
    composeEnhancers(applyMiddleware(ThunkMiddleware))
);

export default store;