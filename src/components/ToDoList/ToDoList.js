import React, { useState, useEffect } from "react";
import './ToDoList.css'
import TodoItem from "../ToDoItem/ToDoItem";
const ToDoList = ({todoList}) => {
 console.log(todoList)
  return (
    <div className = "todolist">
      {todoList &&
        todoList.map((todo, index) => <TodoItem todo={todo} key={index} />)}
    </div>
  );
};

export default ToDoList;
