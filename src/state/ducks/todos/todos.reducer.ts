import {Todo, TodosFilter} from "./todos.models";
import {ActionType, getType} from "typesafe-actions";

import {combineReducers, Reducer} from "redux";
import {todosActions} from "./todos.actions";

export type TodosState = {
    readonly todos: Todo[];
    readonly todosFilter: TodosFilter;
}

export type TodosAction = ActionType<typeof todosActions>;

const todosListReducer: Reducer<Todo[], TodosAction> = (state = [], action) => {
    switch (action.type) {
        case getType(todosActions.add):
            return [...state, action.payload];

        case getType(todosActions.toggle):
            return state.map(item => (item.id === action.payload.id ? {...item, completed: !item.completed} : item));

        default:
            return state;
    }
};

const todosFilterReducer: Reducer<TodosFilter, TodosAction> = (state = TodosFilter.ALL, action) => {
    switch(action.type) {
        case getType(todosActions.changeFilter):
            return action.payload;

        default:
            return state;
    }
};

export const todosReducer = combineReducers<TodosState, TodosAction>({
    todos: todosListReducer,
    todosFilter: todosFilterReducer
});