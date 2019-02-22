import {AddTodoAction, SetVisibilityFilterAction, ToggleTodoAction} from "./types";
import {ActionCreator} from "redux";
import {VisibilityStates} from "./constants";

let nextTodoId: number = 0;

export const addTodo: ActionCreator<AddTodoAction> = (text: string) => ({
    type: "ADD_TODO",
    payload: {
        text,
        id: nextTodoId++,
        completed: false,
    }
});

export const setVisibilityFilter: ActionCreator<SetVisibilityFilterAction> = (filter: VisibilityStates) => ({
    type: "SET_VISIBILITY_FILTER",
    payload: {
        filter
    }
});

export const toggleTodo: ActionCreator<ToggleTodoAction> = (id: number) => ({
    type: "TOGGLE_TODO",
    payload: {
        id
    }
});

export default {
    addTodo,
    setVisibilityFilter,
    toggleTodo
};