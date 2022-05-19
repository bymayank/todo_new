import React from "react";

export default function Main(props) {
  return props.todos.map((todo) => {
    return <Todo checkTodos={props.checkTodo} todo={todo} />;
  });
}

const Todo = ({ todo, checkTodos}) => {
  function handleClick() {
    checkTodos(todo.id);
  }
  return (
    <div style={{ textDecoration: todo.status ? "line-through" : "" }}>
      <input type="checkbox" checked={todo.status} onChange={handleClick} />
      {todo.task}
    </div>
  );
};