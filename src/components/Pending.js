import React from 'react'
import Main from './Main'

export default function Pending(props) {
  return (
    <div>
      <Main todos={props.todos} checkTodo={props.checkTodo} />
      
    </div>
  ) 
}
