import React, { useState, useEffect } from "react";
import firebase from "../../firebase/config";

import TodoItem from "../ToDoItem/ToDoItem";
const ToDoList = () => {
  const [todoList, setTodoList] = useState();
  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push(todos[id]);
      }
      setTodoList(todoList);
    });
  }, []);
  console.log(todoList);

  return (
    <div>
      {todoList &&
        todoList.map((todo, index) => (
            <TodoItem todo={todo} key={index}/>
        ))}
    </div>
  );
};

export default ToDoList;
