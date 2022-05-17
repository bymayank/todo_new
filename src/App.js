import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Pending from "./components/Pending";
import Home from "./components/Home";
import Completed from "./components/Completed";
import Navbar from "./components/Navbar";

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
      <BrowserRouter>
      <Navbar mode={mode} toggle={toggle}/>
        <Routes>
          <Route path="/" element={<Home todos={todo} todoRef={todoRef} addTodo={addTodo}/>} />
          <Route path="/pending" element={<Pending todos={todo} checkTodo={checkTodo}/>} />
          <Route path="/completed" element={<Completed todos={todo} removeTodo={removeTodo}/>} />
        </Routes>
      </BrowserRouter>
        
        {/* <div className="container my-2">
          <Routes>
            <Route path="/home">
              
            </Route>

            {/* <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" className="btn btn-danger" onClick={addTodo}>
              Add
            </button>
          </div> 

            
          </Routes>
        </div> */}
    </>
  );
}

export default App;
