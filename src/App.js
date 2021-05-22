import React, { useState, useEffect } from "react";
import firebase from "./firebase/config";

import "./App.css";

import Form from "./components/Form/Form";
import TabView from "./components/TabView/TabView";

function App() {
  const [todoList, setTodoList] = useState();
  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);
  return (
    <div className="App">
      <h1>ToDo</h1>
      <Form />
      <TabView todoList = {todoList}/>
    </div>
  );
}

export default App;
