import React, { useState } from "react";
import firebase from "../../firebase/config";
import { Button } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import "./ToDoItem.css";

const ToDoItem = ({ todo, complete }) => {
    const deleteTodo = (e) => {
        const todoRef = firebase.database().ref("Todo").child(todo.key);
        todoRef.remove();
    };

    const completeTodo = (e) => {
        const todoRef = firebase.database().ref("Todo").child(todo.key);
        todoRef.update({
            complete: e.target.checked,
        });
    };
    return (
        <div className="container">
            {complete ? (
                <TiDeleteOutline onClick={deleteTodo} />
            ) : (
                <input
                    className="checkbox"
                    type="checkbox"
                    onClick={(e) => completeTodo(e)}
                    defaultChecked={todo.value.complete}
                ></input>
            )}
            <label className={todo.value.complete ? "label-complete" : "label"}>
                {todo.value.title}
            </label>
        </div>
    );
};

export default ToDoItem;
