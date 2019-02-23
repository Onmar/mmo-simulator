import React from 'react'
import * as MyTypes from "MyTypes";
import {Dispatch} from "redux";
import {add} from "../../state/ducks/todos/actions";
import {connect} from "react-redux";

const AddTodoComponent = ({ dispatch }: { dispatch: Dispatch<MyTypes.RootAction> }) => {

    let input: HTMLInputElement;

    return (
        <div>
            <form
              onSubmit={e => {
                  e.preventDefault();
                  if (!input.value.trim()) {
                      return;
                  }
                  dispatch(add({text: input.value}));
                  input.value = '';
              }}
            >
                <input
                    ref={node => {
                        if(node) {
                            input = node
                        }
                    }}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )

};

export const AddTodo = connect()(AddTodoComponent);
