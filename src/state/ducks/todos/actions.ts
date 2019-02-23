import {createStandardAction} from "typesafe-actions";
import {Todo, TodosFilter} from "./models";

const ADD = 'todos/ADD';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_FILTER = 'todos/CHANGE_FILTER';

let nextId: number = 0;

export const add = createStandardAction(ADD).map(
    (payload: {text: string}) => ({
        payload: {
            ...payload,
            id: nextId++,
            completed: false,
        } as Todo,
    })
);

export const toggle = createStandardAction(TOGGLE)<{ id: number }>();

export const changeFilter = createStandardAction(CHANGE_FILTER)<TodosFilter>();