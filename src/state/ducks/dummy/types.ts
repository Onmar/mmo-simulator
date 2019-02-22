import {Action} from "redux";
import {VisibilityStates} from "./constants";

const ADD_TODO: string = "ADD_TODO";
const SET_VISIBILITY_FILTER: string = "SET_VISIBILITY_FILTER";
const TOGGLE_TODO: string = "TOGGLE_TODO";

export interface TodoListState {
    todos: TodoItem[];
    visibilityFilter: VisibilityStates;
}

export interface TodoItem {
    text: string;
    id: number;
    completed: boolean;
}

export interface AddTodoAction extends Action {
    type: "ADD_TODO";
    payload: TodoItem;
}

export interface SetVisibilityFilterAction extends Action {
    type: "SET_VISIBILITY_FILTER";
    payload: {
        filter: VisibilityStates;
    }
}

export interface ToggleTodoAction extends Action {
    type: "TOGGLE_TODO";
    payload: {
        id: number;
    }
}

export type TodoActions = AddTodoAction | SetVisibilityFilterAction | ToggleTodoAction;

export default {
    ADD_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO,
};