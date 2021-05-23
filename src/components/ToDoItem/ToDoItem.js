import React from "react";
import firebase from "../../firebase/config";
import { Button } from "react-bootstrap";
import "./ToDoItem.css";

const ToDoItem = ({ todo }) => {
    const deleteTodo = (e) => {
        const todoRef = firebase.database().ref("Todo").child(todo.id);
        todoRef.remove();
    };

    const completeTodo = () => {
        const todoRef = firebase.database().ref("Todo").child(todo.id);
        todoRef.update({
            complete: !todo.complete,
        });
    };
    return (
        <div className="container">
            <input
                className="checkbox"
                type="checkbox"
                onClick={completeTodo}
                defaultChecked={todo.complete}
            ></input>
            <label className={todo.complete ? "label-complete" : "label"}>{todo.title} </label>
        </div>
    );
};

export default ToDoItem;
