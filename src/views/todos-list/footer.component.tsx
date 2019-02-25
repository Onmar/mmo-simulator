import React from 'react'
import {TodosFilter} from "../../state/ducks/todos/todos.models";
import {FilterLink} from "./link.container";

type Props = {
}

export const Footer: React.FC<Props> = props => {
    const {} = props;

    return (
        <p>
            <span>Show: </span>
            <FilterLink filter={TodosFilter.ALL}>All</FilterLink>
            <FilterLink filter={TodosFilter.ACTIVE}>Active</FilterLink>
            <FilterLink filter={TodosFilter.COMPLETED}>Completed</FilterLink>
        </p>
    )

};