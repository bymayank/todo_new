import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Pending from "./components/Pending";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  
  const [todo, setTodo] = useState([]);
  const [mode, setMode] = useState("light");
  // const todoRef = useRef();
  // const [disabled, setDisabled] = useState(true)
  const [text, setText]= useState('')
  
  // function onChange(e){
  //   if(e.target.value.length===0){
  //     setDisabled(true);
  //   }
  //   else{
  //     setDisabled(false);
  //   }
  // }

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
    const task = text;
    let date = new Date();
    if (task === "") return;

    setTodo((prevTask) => {
      return [...prevTask, { id: date, task: task, status: false }];
    });
    setText("");
    // setDisabled(true);
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
          <Route path="/" element={<Home todos={todo}  addTodo={addTodo}  text={text} setText={setText}/>} />
          <Route path="/pending" element={<Pending todos={todo} checkTodo={checkTodo} removeTodo={removeTodo}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
