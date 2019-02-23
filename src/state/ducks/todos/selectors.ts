import {createSelector} from "reselect";

import {TodosState} from "./reducer";
import {TodosFilter} from "./models";

export const getTodos = (state: TodosState) => state.todos;

export const getTodosFilter = (state: TodosState) => state.todosFilter;

export const getFilteredTodos = createSelector(getTodos, getTodosFilter, (todos, todosFilter) => {
    switch(todosFilter) {
        case TodosFilter.ALL:
            return todos;
        case TodosFilter.ACTIVE:
            return todos.filter(t => !t.completed);
        case TodosFilter.COMPLETED:
            return todos.filter(t => t.completed);
    }
});