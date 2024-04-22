import React from "react";
import TodoItem from "./TodoItem";

export const Todos = (props) => {
    let mystyle={
        minHeight:"70vh"
    }
  return (
    <div className="container my-3" style={mystyle}>
      <h3 className=" my-3">Todos List </h3>
      {props.todos.length === 0                //If no task there then display No Task
        ? "No Task"
        : props.todos.map((todo) => {
            return (
              //Each child in a list should have a unique "key" prop- key is Sno
              <TodoItem todo={todo} key={todo.Sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
