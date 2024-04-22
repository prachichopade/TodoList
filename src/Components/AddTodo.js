// Add Task component after navbar

import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  // useState for title and description
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Function to Generate alert if spaces are blanks
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    }

    // when task added make spaces blank
    else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h3> Add Task</h3>

      <form onSubmit={submit}>
        {/* Title of Task */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            //Event  for change in title feild
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="title"
            aria-describedby="emailHelp"
          />
        </div>

        {/* Description of Task */}
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            value={desc}
            //Event for change in description feild
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            id="exampleInputPassword1"
          />
        </div>
        {/* Button to add task */}
        <button type="submit" className="btn btn-success btn-sm">
          Add Task
        </button>
      </form>
    </div>
  );
};
