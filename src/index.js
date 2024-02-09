import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// const root = ReactDOM.createRoot(document.getElementById("root"));

import { BrowserRouter as Router } from "react-router-dom";

// const root = document.getElementById("root");
// const root = ReactDOM.createRoot(document.getElementById("root"));


ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById("root")
)

