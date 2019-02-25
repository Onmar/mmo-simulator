import React, {Component} from 'react';
import {Footer} from "./todos-list/footer.component";
import {VisibleTodoList} from "./todos-list/todos-list.container";
import {AddTodo} from "./todos-list/add-todo.container";

import './App.css';

export class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <AddTodo/>
                    <VisibleTodoList/>
                    <Footer/>
                </div>
            </div>
        );
    }
}
