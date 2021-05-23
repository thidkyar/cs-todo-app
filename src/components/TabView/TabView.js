import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { BsListTask } from "react-icons/bs";
import { BiCalendarCheck } from "react-icons/bi";
import ToDoList from "../../components/ToDoList/ToDoList";
import ToDoListComplete from "../../components/ToDoListComplete/ToDoListComplete";
import './TabView.css'

function ControlledTabs({ todoList }) {
    const [key, setKey] = useState("home");

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            fill
            justify
        >
            <Tab eventKey="home" title={<BsListTask />}>
                <ToDoList todoList={todoList} />
            </Tab>
            <Tab eventKey="complete" title={<BiCalendarCheck />}>
                <ToDoListComplete todoList={todoList} />
            </Tab>
        </Tabs>
    );
}

export default ControlledTabs;
