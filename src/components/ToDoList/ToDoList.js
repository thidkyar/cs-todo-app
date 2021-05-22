import React, { useState, useEffect } from "react";

import TodoItem from "../ToDoItem/ToDoItem";
const ToDoList = ({todoList}) => {
 console.log(todoList)
  return (
    <div>
      {todoList &&
        todoList.map((todo, index) => <TodoItem todo={todo} key={index} />)}
    </div>
  );
};

export default ToDoList;
