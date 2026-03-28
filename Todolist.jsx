import React from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  // state
  const [todos, setTodos] = React.useState([
    { title: "pravallika", id: uuidv4(), status: true },
    { title: "uma", id: uuidv4(), status: true },
    { title: "raji", id: uuidv4(), status: false },
  ]);

  // actions
  function deleteTodo(id) {
    setTodos(cv => cv.filter(todo => todo.id !== id));
  }
  function addTodo() {
    const input = document.getElementById("d1").value;
    if (!input.trim()) return;
    const newtodo = { title: input, id: uuidv4(), status: true };
    setTodos(cv => [...cv, newtodo]);
  }
  function doneTodo(id) {
    setTodos(cv =>
      cv.map(todo =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  }

  // UI
  return (
    <div className="card shadow p-3 m-3">
      <div className="card-body">
        <h3 className="card-title text-center mb-3">Todo List</h3>
        <div className="d-flex mb-3">
          <input type="text" id="d1" className="form-control" placeholder="Enter todo"/>
          <button className="btn btn-success ms-2" onClick={addTodo}>Add Todo</button>
        </div>
        <ul className="list-group">
          {todos.map((todo, i) => (
            <Todo key={todo.id} t={todo} i={i} del={deleteTodo} done={doneTodo}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;