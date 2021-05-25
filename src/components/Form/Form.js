import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import firebase from "../../firebase/config";
import "./Form.css";

const ToDoForm = ({ show, setShow }) => {
    const [title, setTitle] = useState("");

    const handleClose = () => setShow(false);

    //update task state with modal input 
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    //create and add item to firebase database
    const createTodo = () => {
        const todoRef = firebase.database().ref("Todo");
        const todo = {
            title,
            complete: false,
        };

        todoRef.push(todo);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add To Do</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    placeholder="I need to.."
                    onChange={handleOnChange}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={createTodo}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ToDoForm;
