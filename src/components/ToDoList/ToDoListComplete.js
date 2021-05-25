import React from "react";
import TodoItem from "../ToDoItem/ToDoItem";
import '../ToDoList/ToDoList.css'

//filters and renders only completed to do item inside completed tab
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
