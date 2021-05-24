import React from "react";
import firebase from "../../firebase/config";
import { Button } from "react-bootstrap";
import "./ToDoItem.css";

const ToDoItem = ({ todo }) => {
    const deleteTodo = (e) => {
        const todoRef = firebase.database().ref("Todo").child(todo.key);
        todoRef.remove();
    };

    const completeTodo = () => {
        const todoRef = firebase.database().ref("Todo").child(todo.key);
        todoRef.update({
            complete: !todo.value.complete,
        });
    };
    return (
        <div className="container">
            <input
                className="checkbox"
                type="checkbox"
                onClick={completeTodo}
                defaultChecked={todo.value.complete}
            ></input>
            <label className={todo.value.complete ? "label-complete" : "label"}>
                {todo.value.title}{" "}
            </label>
        </div>
    );
};

export default ToDoItem;
