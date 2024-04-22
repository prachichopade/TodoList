import React from "react";

//used destructering to get value from parent
export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p> {todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        //Event when click delete button
        onClick={() => {
          onDelete(todo);
        }}
      >
        DELETE
      </button>
    </div>
  );
};

export default TodoItem;
