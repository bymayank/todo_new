import React from 'react'
import Main from './Main'

export default function Pending(props) {
  return (
    <div>
      <Main todos={props.todos} checkTodo={props.checkTodo} removeTodo={props.removeTodo}/>
      <button type="button" className="btn btn-success" onClick={props.removeTodo}>
        Remove
      </button>
    </div>
  ) 
}
