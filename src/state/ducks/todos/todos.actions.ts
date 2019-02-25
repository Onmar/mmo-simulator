import {createStandardAction} from "typesafe-actions";
import {Todo, TodosFilter} from "./todos.models";
import cuid from 'cuid';

const ADD = '@todos/ADD';
const TOGGLE = '@todos/TOGGLE';
const CHANGE_FILTER = '@todos/CHANGE_FILTER';

const add = createStandardAction(ADD).map(
    (payload: { text: string }) => ({
        payload: {
            ...payload,
            id: cuid(),
            completed: false,
        } as Todo,
    })
);

const toggle = createStandardAction(TOGGLE)<{ id: string }>();

const changeFilter = createStandardAction(CHANGE_FILTER)<TodosFilter>();

export const todosActions = {
    add,
    toggle,
    changeFilter
};