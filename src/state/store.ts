import {applyMiddleware, createStore, Middleware} from "redux";
import {composeEnhancers} from "./utils";
import {rootReducer} from "./root-reducer";

const middlewares: Array<Middleware> = [];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

export const store = createStore(rootReducer, initialState, enhancer);
