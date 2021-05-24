import React from "react";
import "./ToDoList.css";
import TodoItem from "../ToDoItem/ToDoItem";
const ToDoList = ({ todos }) => {
    return (
        <div className="todolist">
            {Object.keys(todos).map((key, id) => (
                <TodoItem key={key} id={id} todo={todos[key]} />
            ))}
        </div>
    );
};

export default ToDoList;
