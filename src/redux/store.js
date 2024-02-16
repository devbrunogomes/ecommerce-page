// o applyMiddleWare intercepta tudo o que acontece no redux
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import logger from 'redux-logger'

export const store = createStore(rootReducer, applyMiddleware(logger));
