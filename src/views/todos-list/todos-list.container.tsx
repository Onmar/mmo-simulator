import * as MyTypes from "MyTypes";
import {todosActions, todosSelectors} from "../../state/ducks/todos";
import {connect} from "react-redux";
import {TodosList} from "./todos-list.component";


const mapStateToProps = (state: MyTypes.RootState) => ({
    todos: todosSelectors.getFilteredTodos(state.todos),
});

export const VisibleTodoList = connect(
    mapStateToProps,
    {
        onTodoClick: todosActions.toggle
    }
)(TodosList);
