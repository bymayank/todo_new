import React from "react";
import { useState } from "react";

export default function Home(props) {
  // const [disabled, setDisabled] = useState(true)
  
  // function onChange(e){
  //   if(e.target.value.length===0){
  //     setDisabled(true);
  //     console.log(disabled);
  //   }
  //   else{
  //     setDisabled(false);
  //     console.log(disabled);
  //   }
  // } 

  return (
    <>
    <div className="input-group mb-3">
      <input
        // ref={props.todoRef}
        value={props.text}
        onChange={(e)=>{props.setText(e.target.value)}}
        type="text"
        className="form-control"
        placeholder="What's up for the Day!!!"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
    </div>

      <button
        onClick={props.addTodo}
        disabled={!props.text}
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Add
      </button>
    <div>{props.todos.filter((todo) => !todo.status).length} Task left</div>
    </>
  );
}
