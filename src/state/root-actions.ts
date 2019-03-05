import {todosActions} from "./ducks/todos/todos.actions";
import {itemsActions} from "./ducks/items/items.actions";

export const rootActions = {
    todos: todosActions,
    items: itemsActions,
};