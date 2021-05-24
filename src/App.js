import React, {useState} from "react";

import "./App.css";
import AddToDoButton from "./components/AddToDoButton/AddToDoButton";

import TabView from "./components/TabView/TabView";

function App() {
    return (
        <div>
            <div className="App">
                <TabView />
            </div>
            <div className="App-child">
                <AddToDoButton />
            </div>
        </div>
    );
}

export default App;
