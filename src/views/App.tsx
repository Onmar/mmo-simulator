import React, {Component} from 'react';
import {Footer} from "./todos-list/footer.component";
import {VisibleTodoList} from "./todos-list/todos-list.container";
import {AddTodo} from "./todos-list/add-todo.container";

import './App.css';
import {ItemDisplayComponent} from "../components/item-display/item-display.component";

export class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <AddTodo/>
                    <VisibleTodoList/>
                    <Footer/>
                    <ItemDisplayComponent item={undefined}/>
                </div>
            </div>
        );
    }
}
