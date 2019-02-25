import { combineReducers } from 'redux';
import {todosReducer} from "./ducks/todos/todos.reducer";

export const rootReducer = combineReducers({
    todos: todosReducer
});