import {TodoItem, TodoListState} from "./types";
import {VisibilityStates} from "./constants";

const getVisibleTodos = (todos: TodoItem[], filter: VisibilityStates) => {
    switch (filter) {
        case VisibilityStates.SHOW_ALL:
            return todos;
        case VisibilityStates.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityStates.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

export default {
    getVisibleTodos
};