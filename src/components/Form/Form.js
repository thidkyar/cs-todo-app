import React, { useState } from "react";
import firebase from "../../firebase/config";
import './Form.css'

const Form = () => {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };

    todoRef.push(todo);
  };
  
  return (
    <div className="footer">
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={createTodo}>Add Todo</button>
    </div>
  );
};

export default Form;
