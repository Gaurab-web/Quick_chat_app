import {call, put, takeLatest} from 'redux-saga/effects'
import { getApi, postApi } from '../../utils/helpers/ApiRequest';
import { dataListFailure, dataListSuccess, loginFailure, loginSuccess } from '../reducer/AuthReducer';

// export function* loginSaga(action){
//     let header = {
//         Accept : 'application/json',
//         ContentType : 'application/json'
//     };
//     console.log('Hello');
//     try{
//         let response = yield call(
//             postApi,
//             `user/signin`,
//             action.payload,
//             header
//         );
//         console.log('Login Response: ', response);
//         if(response.status == 200){
//             yield put(loginSuccess(response?.data))
//         }
//         else{
//             yield put(loginFailure(response?.data))
//         }
//     }
//     catch(error){
//         console.log('Error: ', error);
//         yield put(loginFailure(response?.data))
//     }
// }

export function* dataListSaga(){
    let header = {
        Accept : 'application/json',
        ContentType : 'application/json'
    }
    try{
        let response = yield call(
            getApi,
            'products',
            header
        );
        console.log('Response: ', response);
        if(response.status == 200){
            yield put(dataListSuccess(response?.data))
        }
        else{
            yield put(dataListFailure(response?.data))
        }
    }
    catch(error){
        console.log('Error: ', error);
        yield put(dataListFailure(error))
    }
}

const watchFunction = [
    // (function* (){
    //     yield takeLatest('Auth/loginRequest', loginSaga)
    // })()

    (function* (){
        yield takeLatest('Auth/dataListRequest', dataListSaga)
    })()
]

export default watchFunction;