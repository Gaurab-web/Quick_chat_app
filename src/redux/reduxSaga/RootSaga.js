import { all } from "redux-saga/effects";
import AuthSaga from "./AuthSaga";

const combineSaga = [...AuthSaga];
export default function* RootSaga(){
    yield all(combineSaga)
}