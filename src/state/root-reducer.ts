import { combineReducers } from 'redux';
import {todosReducer} from "./ducks/todos";

const rootReducer = combineReducers({
    todos: todosReducer
});

export default rootReducer;