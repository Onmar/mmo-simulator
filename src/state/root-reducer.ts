import { combineReducers } from 'redux';
import {todosReducer} from "./ducks/todos/todos.reducer";
import {itemsReducer} from "./ducks/items/items.reducer";

export const rootReducer = combineReducers({
    todos: todosReducer,
    items: itemsReducer
});