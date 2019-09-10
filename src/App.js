import React from 'react';
import './App.css';

import Todolist from './Components/Todolist/Todolist';

import todos from './api/todos';
import users from './api/users';

function getTodosWithUsers(todosApi, usersApi) {
  return todosApi.map(item => (
    {
      ...item,
      user: usersApi.find(user => user.id === item.userId),
    }
  ));
}

const preperedTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <>
      <div className="App">
        <h1>Static list of todos</h1>
        <p>
          <span>Todos: </span>
          {todos.length}
        </p>

        <p>
          <span>Users: </span>
          {users.length}
        </p>
      </div>
      <Todolist todos={preperedTodos} />
    </>
  );
}

export default App;
