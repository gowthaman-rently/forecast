import {call, put, takeEvery} from 'redux-saga/effects';
import fetchLocation from '../requests/fetchLocation';

function* handleGetLocation(){
    try{
        const location = yield call(fetchLocation);
        yield put({type:"SET_LOCATION", payload:location});
    }
    catch(error){
        yield put({type:"ERROR_LOCATION", payload:error})
    }
}

function* watcherLocationSaga(){
    yield takeEvery("GET_LOCATION", handleGetLocation)
}

export default watcherLocationSaga;