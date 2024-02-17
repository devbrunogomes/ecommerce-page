// o applyMiddleWare intercepta tudo o que acontece no redux
import { rootReducer } from "./root-reducer";
import {createLogger, logger} from 'redux-logger'
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
  reducer: rootReducer,
});
