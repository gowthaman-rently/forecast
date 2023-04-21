import { all } from "redux-saga/effects";
import watcherLocationSaga from "./handlers/fetchLocation";

export default function* rootSaga(){
    yield all([watcherLocationSaga()]);
}