import React from 'react'

export default function Completed(props) {
  return (
    // <div style={{ textDecoration: props.todos.status ? "line-through" : "" }}>
    //   <input type="checkbox" checked={props.todos.status} />
    //   {props.todos.task}
      
    // </div>
    <button type="button" className="btn btn-success" onClick={props.removeTodo}>
    Remove
  </button>
    
  )
}
