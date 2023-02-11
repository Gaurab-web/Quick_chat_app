import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : '',
    isLoding : true,
    // loginResponse : {},
    dataResponse : {}
}

const AuthSlice = createSlice({
    name : 'Auth',
    initialState: initialState,
    reducers:{
        // Login Reducer
        // loginRequest(state,action){
        //     state.status = action.type
        // },
        // loginSuccess(state,action){
        //     state.status = action.type,
        //     state.loginResponse = action.payload
        // },
        // loginFailure(state,action){
        //     state.status = action.type,
        //     state.error = action.payload
        // },

        // Data Response
        dataListRequest(state,action){
            state.status = action.type
        },
        dataListSuccess(state,action){
            state.status = action.type,
            state.dataResponse = action.payload
        },
        dataListFailure(state,action){
            state.status = action.type,
            state.error = action.payload
        }
    }
})

export const{
    // loginRequest,
    // loginSuccess,
    // loginFailure,
    dataListRequest,
    dataListSuccess,
    dataListFailure
} = AuthSlice.actions

export default AuthSlice.reducer;