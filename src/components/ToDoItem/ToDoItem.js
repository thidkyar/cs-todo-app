import React from "react";

const ToDoItem = ({ todo }) => {
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
};

export default ToDoItem;
