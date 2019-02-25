import * as MyTypes from "MyTypes";
import {connect} from "react-redux";
import {TodosList} from "./todos-list.component";
import {todosSelectors} from "../../state/ducks/todos/todos.selectors";
import {todosActions} from "../../state/ducks/todos/todos.actions";


const mapStateToProps = (state: MyTypes.RootState) => ({
    todos: todosSelectors.getFilteredTodos(state.todos),
});

export const VisibleTodoList = connect(
    mapStateToProps,
    {
        onTodoClick: todosActions.toggle
    }
)(TodosList);
