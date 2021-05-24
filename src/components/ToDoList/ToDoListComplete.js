import React from "react";
import TodoItem from "../ToDoItem/ToDoItem";
import '../ToDoList/ToDoList.css'
const ToDoListComplete = ({ todos }) => {
    return (
        <div className="todolist">
            {Object.keys(todos).map(
                (key, id) =>
                    todos[key].value.complete && (
                        <TodoItem key={key} id={id} todo={todos[key]} complete={true}/>
                    )
            )}
        </div>
    );
};

export default ToDoListComplete;
