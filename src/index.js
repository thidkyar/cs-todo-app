import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import store from "./redux/createStore";
import App from "./App";

const rrfConfig = {
    userProfile: "Todo",
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
