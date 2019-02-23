import {Todo, TodosFilter} from "./models";
import {ActionType, getType} from "typesafe-actions";

import * as todos from './actions';
import {combineReducers, Reducer} from "redux";

export type TodosState = {
    readonly todos: Todo[];
    readonly todosFilter: TodosFilter;
}

export type TodosAction = ActionType<typeof todos>;

const todosReducer: Reducer<Todo[], TodosAction> = (state = [], action) => {
    switch (action.type) {
        case getType(todos.add):
            return [...state, action.payload];

        case getType(todos.toggle):
            return state.map(item => (item.id === action.payload.id ? {...item, completed: !item.completed} : item));

        default:
            return state;
    }
};

const todosFilterReducer: Reducer<TodosFilter, TodosAction> = (state = TodosFilter.ALL, action) => {
    switch(action.type) {
        case getType(todos.changeFilter):
            return action.payload;

        default:
            return state;
    }
};

export default combineReducers<TodosState, TodosAction>({
    todos: todosReducer,
    todosFilter: todosFilterReducer
})