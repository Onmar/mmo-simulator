import React from 'react';

import {Todo as TodoType} from "../../state/ducks/todos/todos.models";
import {Todo} from "./todo.component";

type Props = {
    todos: Array<TodoType>;
    onTodoClick: ({ id }: { id: string }) => any;
};

export const TodosList: React.FC<Props> = props => {
    const { todos, onTodoClick } = props;

    const handleTodoClick = (id: string) => {
        onTodoClick({ id: id });
    };

    if(todos.length == 0) {
        return <ul>
            <li>No Entries</li>
        </ul>
    }

    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => handleTodoClick(todo.id)} />
            ))}
        </ul>
    )

};