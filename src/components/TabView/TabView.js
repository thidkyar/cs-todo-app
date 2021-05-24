import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useFirebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import { Tabs, Tab } from "react-bootstrap";
import { BsListTask } from "react-icons/bs";
import { BiCalendarCheck } from "react-icons/bi";
import ToDoList from "../../components/ToDoList/ToDoList";
import ToDoListComplete from "../../components/ToDoListComplete/ToDoListComplete";
import './TabView.css'

function ControlledTabs() {
    const [key, setKey] = useState("home");

    useFirebaseConnect([
        "Todo", 
    ]);

    const todos = useSelector((state) => state.firebase.ordered.Todo);

    if (!isLoaded(todos)) {
        return <div>Loading...</div>;
    }

    if (isEmpty(todos)) {
        return <div>Todos List Is Empty</div>;
    }

    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        fill
        justify
    >
        <Tab eventKey="home" title={<BsListTask />}>
            <ToDoList todos={todos}/>
        </Tab>
        <Tab eventKey="complete" title={<BiCalendarCheck />}>
            <ToDoListComplete todos={todos}/>
        </Tab>
    </Tabs>
    );
}

export default ControlledTabs;
