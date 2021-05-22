import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

import ToDoList from '../../components/ToDoList/ToDoList'
import ToDoListComplete from '../../components/ToDoListComplete/ToDoListComplete'
function ControlledTabs({todoList}) {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Home">
        <ToDoList todoList = {todoList}/>
      </Tab>
      <Tab eventKey="complete" title="Complete">
        <ToDoListComplete todoList = {todoList}/>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;
