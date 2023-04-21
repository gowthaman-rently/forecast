import { createStore, applyMiddleware , compose} from "redux";
import allReducer from "../reducers";
import ThunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootsaga";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware,ThunkMiddleware]

const store = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)(createStore)(allReducer);

sagaMiddleware.run(rootSaga);

export default store;