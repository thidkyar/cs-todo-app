import React from "react";
import firebase from '../../firebase/config'
import {Button} from 'react-bootstrap'
import './ToDoItem.css'

const ToDoItem = ({ todo }) => {

    const deleteTodo = e => {
        const todoRef = firebase.database().ref("Todo").child(todo.id)
        todoRef.remove()
    }

    const completeTodo = () => {
        const todoRef = firebase.database().ref("Todo").child(todo.id)
        todoRef.update({
            complete: !todo.complete
        })
    }
  return (
    <div>
      <p className={todo.complete ? "complete" : ""}>{todo.title}</p>
      <input type="checkbox" onClick={completeTodo} defaultChecked={todo.complete}></input>
    </div>
  );
};

export default ToDoItem;
