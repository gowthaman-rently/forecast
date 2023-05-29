import { createStore, applyMiddleware , compose} from "redux";
import allReducer from "../reducers";
import ThunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/es/storage";
import rootSaga from "../saga/rootsaga";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

// persist reducer

const persistConfig =  {
    key : "randomKey",
    storage
}

const persistedReducer = persistReducer(persistConfig,allReducer );


const middleware = [sagaMiddleware,ThunkMiddleware];

const store = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)(createStore)(persistedReducer);

// persist store

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
export {persistor};