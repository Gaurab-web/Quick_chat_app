import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import AuthReducer from "../reducer/AuthReducer";
import RootSaga from "../reduxSaga/RootSaga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

const store = configureStore({
  reducer:{
    AuthReducer:AuthReducer
  },
  middleware,
});
sagaMiddleware.run(RootSaga);
export default store;
