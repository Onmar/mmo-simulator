import React, { Component } from 'react';
import './App.css';
import logo from "./logo.svg";
import {Footer} from "./todos-list/footer.component";
import {VisibleTodoList} from "./todos-list/todos-list.container";
import {AddTodo} from "./todos-list/add-todo.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
