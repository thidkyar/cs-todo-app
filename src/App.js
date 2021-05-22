import React from 'react'
import "./App.css";

import Form from './components/Form/Form'
import ToDoList from './components/ToDoList/ToDoList'

function App() {

  return (
    <div className="App">
      <h1>ToDo</h1>
      <Form />
      <ToDoList/>
    </div>
  );
}

export default App;
