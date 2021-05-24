import React from "react";
import TodoItem from "../ToDoItem/ToDoItem";

const ToDoListComplete = ({ todos }) => {
    return (
        <div className="container">
            {Object.keys(todos).map(
                (key, id) =>
                    todos[key].value.complete && (
                        <TodoItem key={key} id={id} todo={todos[key]} />
                    )
            )}
        </div>
    );
};

export default ToDoListComplete;
