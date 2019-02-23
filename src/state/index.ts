import {applyMiddleware, createStore, Middleware} from "redux";
import {composeEnhancers} from "./utils";
import rootReducer from "./root-reducer";

const middlewares: Array<Middleware> = [];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

const store = createStore(rootReducer, initialState, enhancer);

export default store;