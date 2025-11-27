import React from "react";
import TodoList from "../Todolist";

function App() {
  return (
    <>
      <div className="card m-3">
        <div className="card-body text-center">
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
