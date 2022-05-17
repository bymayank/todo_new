import React, { useState, useRef } from "react";
import Main from "./components/Home";
import Navbar from "./components/Navbar";
import {Input} from "@innovaccer/design-system";

function App() {
  const [todo, setTodo] = useState([]);
  const [mode, setMode] = useState("light");
  const todoRef = useRef();
  function toggle() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#D3D3D3";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  function checkTodo(id) {
    const newList = [...todo];
    const todos = newList.find((todos) => todos.id === id);
    todos.status = !todos.status;
    setTodo(newList);
  }

  function addTodo() {
    const task = todoRef.current.value;
    let date = new Date();
    if (task === "") return;

    setTodo((prevTask) => {
      return [...prevTask, { id: date, task: task, status: false }];
    });
    todoRef.current.value = null;
  }
  function removeTodo() {
    const newList = todo.filter((todos) => !todos.status);
    setTodo(newList);
  }

  return (
    <>
      <Navbar mode={mode} toggle={toggle} />
      <div className="container my-2">
        <Main todos={todo} checkTodo={checkTodo} />
        <Input ref={todoRef} type="text" />
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger" onClick={addTodo}>
            Add
          </button>
          <button type="button" class="btn btn-success" onClick={removeTodo}>
            Remove
          </button>
        </div>

        <div>{todo.filter((todo) => !todo.status).length} Task left</div>
      </div>
    </>
  );
}

export default App;
