import {AddTodoComponent} from "./add-todo.component";
import {connect} from "react-redux";
import {todosActions} from "../../state/ducks/todos/todos.actions";

export const AddTodo = connect(null, {
    onSubmit: todosActions.add
})(AddTodoComponent);