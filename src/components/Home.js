import React from "react";

export default function Home(props) {
  
  return (
    <>
    <div className="input-group mb-3">
      <input
        ref={props.todoRef}
        type="text"
        className="form-control"
        placeholder="What's up for the Day!!!"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button
        onClick={props.addTodo}
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Add
      </button>
    </div>
    <div>{props.todos.filter((todo) => !todo.status).length} Task left</div>
    </>
  );
}
