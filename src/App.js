import "./App.css";
import Navbar from "./Components/Navbar";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import { AddTodo } from "./Components/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  // save task into localStorage
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //Delete button handler
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Add task function
  const addTodo = (title, desc) => {
    let Sno;
    if (todos.length === 0) {
      Sno = 1;
    } else {
      Sno = todos[todos.length - 1] + 1;
    }
    const myTodo = {
      Sno: Sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  // useState hooks
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Navbar title="Todo List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
