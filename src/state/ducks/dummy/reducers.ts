import {combineReducers, Reducer} from "redux";
import types, {TodoActions, TodoItem, TodoListState} from "./types";
import {VisibilityStates} from "./constants";
/* State shape
state: {
  todos: [],
  visibilityFilter: SHOW_ALL
}
*/
export const initialState: TodoListState = {
    todos: [],
    visibilityFilter: VisibilityStates.SHOW_ALL,
};


// this method can be confusing because it serves two purposes:
// 1 - it create a new todo
// 2 - it toggles the completed state of an existing todo
const todoItemReducer: Reducer<TodoItem> = (state: TodoItem | undefined = undefined, action) => {
    switch(action.type) {
        case types.ADD_TODO:
            return action.payload;
        case types.TOGGLE_TODO:
            if(state == undefined) return state;
            if (state.id !== action.payload.id) {
                return state;
            }
            return { ...state, completed: !state.completed };
        default:
            return state;
    }
};

const visibilityFilterReducer: Reducer<VisibilityStates> = (state: VisibilityStates = VisibilityStates.SHOW_ALL, action) => {
    switch(action.type) {
        case types.SET_VISIBILITY_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
};

const todoItemListReducer: Reducer<TodoItem[]> = (state: TodoItem[] = [], action) => {
    switch(action.type) {
        case types.ADD_TODO:
            return { ...state, todos: [...state, todoItemReducer(undefined, action)] };
        case types.TOGGLE_TODO:
            return { ...state, todos: state.map(t => todoItemReducer(t, action)) };
        default:
            return state;
    }
};

const todosReducer = combineReducers({
    todos: todoItemListReducer,
    visibilityFilter: visibilityFilterReducer,
});

export default todosReducer;