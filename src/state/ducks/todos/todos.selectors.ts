import {createSelector} from "reselect";

import {TodosState} from "./todos.reducer";
import {TodosFilter} from "./todos.models";

const getTodos = (state: TodosState) => state.todos;

const getTodosFilter = (state: TodosState) => state.todosFilter;

const getFilteredTodos = createSelector(getTodos, getTodosFilter, (todos, todosFilter) => {
    switch(todosFilter) {
        case TodosFilter.ALL:
            return todos;
        case TodosFilter.ACTIVE:
            return todos.filter(t => !t.completed);
        case TodosFilter.COMPLETED:
            return todos.filter(t => t.completed);
    }
});

export const todosSelectors = {
    getTodos,
    getTodosFilter,
    getFilteredTodos,
};