// import React from "react"
// import Todo from "./Todo";
// import { v4 as uuidv4 } from 'uuid';

// function TodoList(){
//     // state
//      var[todos,setTodos]=React.useState([
//         {
//             title:"pravallika",
//             id:uuidv4(),
//             status:true
//         },
//         {
//             title:"uma",
//             id:uuidv4(),
//             status:true
//         },
//         {
//             title:"raji",
//             id:uuidv4(),
//             status:false
//         },
//         {
//             title:"mounika",
//             id:uuidv4(),
//             status:true
//         },
//      ]);


//     // action
//     function deleteTodo(id){
//         setTodos((cv)=>{
//            return cv.filter((todo)=>{
//             if(todo.id===id){
//                 return false;
//             }else{
//                 return true;
//             }
//            });
//         });
//     };

//     function addTodo(){
//         var newtodo={
//             title:document.getElementById("d1").value,
//             id:uuidv4(),
//         };
//         setTodos((cv)=>{
//           return [...cv,newtodo]
//         })
//     }

//     function doneTodo(id){
//         setTodos((cv)=>{
//             var x= cv.map((todo)=>{
//                if(todo.id===id){
//                 todo.status=!todo.status;
//                } 
//                return todo;
//             });
//             return[...x];
//         });
//     }

//     // UI
//     return (
//         <div className="border border-success border-2 p-2 m-2">
//             <h1>TodoList</h1>
//             <input type="text" id="d1"/>
//             <button  style={{marginLeft:"2%",borderRadius:"8px",marginBottom:"2%"}} onClick={()=>{addTodo()}}>AddTodo</button>
//             <ul>
//                 {
//                 todos.map((todo,i)=>{
//                  return ( <Todo t={todo} i={i} del={deleteTodo} done={doneTodo}></Todo>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }
// export default TodoList;

import React from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  // state
  const [todos, setTodos] = React.useState([
    { title: "pravallika", id: uuidv4(), status: true },
    { title: "uma", id: uuidv4(), status: true },
    { title: "raji", id: uuidv4(), status: false },
    { title: "mounika", id: uuidv4(), status: true },
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
          <input
            type="text"
            id="d1"
            className="form-control"
            placeholder="Enter todo"
          />
          <button
            className="btn btn-success ms-2"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>

        <ul className="list-group">
          {todos.map((todo, i) => (
            <Todo
              key={todo.id}
              t={todo}
              i={i}
              del={deleteTodo}
              done={doneTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
