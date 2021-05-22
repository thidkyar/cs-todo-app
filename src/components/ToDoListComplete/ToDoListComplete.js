import React from "react";

const ToDoListComplete = ({ todoList }) => {
  return (
    <div>
      {todoList &&
        todoList.map((todo) => (todo.complete ? <p>{todo.title}</p> : ""))}
    </div>
  );
};

export default ToDoListComplete;
