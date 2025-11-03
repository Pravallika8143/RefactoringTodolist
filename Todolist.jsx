import React from "react"
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';

function TodoList(){
    // state
     var[todos,setTodos]=React.useState([
        {
            title:"pravallika",
            id:uuidv4(),
            status:true
        },
        {
            title:"uma",
            id:uuidv4(),
            status:true
        },
        {
            title:"raji",
            id:uuidv4(),
            status:false
        },
        {
            title:"mounika",
            id:uuidv4(),
            status:true
        },
     ]);


    // action
    function deleteTodo(id){
        setTodos((cv)=>{
           return cv.filter((todo)=>{
            if(todo.id===id){
                return false;
            }else{
                return true;
            }
           });
        });
    };

    function addTodo(){
        var newtodo={
            title:document.getElementById("d1").value,
            id:uuidv4(),
        };
        setTodos((cv)=>{
          return [...cv,newtodo]
        })
    }

    function doneTodo(id){
        setTodos((cv)=>{
            var x= cv.map((todo)=>{
               if(todo.id===id){
                todo.status=!todo.status;
               } 
               return todo;
            });
            return[...x];
        });
    }

    // UI
    return (
        <div className="border border-success border-2 p-2 m-2">
            <h1>TodoList</h1>
            <input type="text" id="d1"/>
            <button  style={{marginLeft:"2%",borderRadius:"8px"}} onClick={()=>{addTodo()}}>AddTodo</button>
            <ul>
                {
                todos.map((todo,i)=>{
                 return ( <Todo t={todo} i={i} del={deleteTodo} done={doneTodo}></Todo>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default TodoList