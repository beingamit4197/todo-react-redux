import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
function App() {
  return (
    <div className="App">
    <h1>ToDo Application</h1>
    {/* <h2></h2> */}
    <div class="card">
        <div class="tools">
          <div class="circle">
            <span class="red box"></span>
          </div>
          <div class="circle">
            <span class="yellow box"></span>
          </div>
          <div class="circle">
            <span class="green box"></span>
          </div>
        </div>
        <div class="card__content">
          <AddTodo />
          <TodoList />
        </div>
    </div>
    </div>
  );
}

export default App;
