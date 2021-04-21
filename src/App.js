import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages";
import BlogPage from "./Pages/BlogPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/blog" component={BlogPage} exact />
            </Switch>
        </Router>
    );
}

export default App;
