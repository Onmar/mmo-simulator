import * as MyTypes from "MyTypes";
import {TodosFilter} from "../../state/ducks/todos/todos.models";
import {connect} from "react-redux";
import {Link} from "./link.component";
import {todosActions} from "../../state/ducks/todos/todos.actions";

type OwnProps = {
    filter: TodosFilter;
}

const mapStateToProps = (state: MyTypes.RootState, ownProps: OwnProps) => ({
    active: state.todos.todosFilter === ownProps.filter
});

export const FilterLink = connect(
    mapStateToProps,
    ((dispatch, ownProps) => {
        return {
            onClick: () => dispatch(todosActions.changeFilter(ownProps.filter)),
        }
    })
)(Link);