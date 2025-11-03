import React from "react";

function Todo(props){
    return (
       <div style={{listStyle:"none"}}>
        <li className="border border-secondary border-2 p-1 m-1">
            <span style={props.t.status?{textDecoration:'line-through'}:{}}>{props.t.title}</span>
            <button className={props.t.status?"btn btn-success ms-3":"btn btn-info ms-3"} onClick={()=>{props.done(props.t.id)}}>{props.t.status?"Undo":"Done"}</button>
            <button className="ms-2 m-1 btn btn-danger " onClick={()=>{props.del(props.t.id)}}>Delete</button>
        </li>
        </div>
    )
}
export default Todo;
