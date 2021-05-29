import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages";
import BlogPage from "./Pages/BlogPage";
import ProjectsPage from "./Pages/ProjectsPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/blog" component={BlogPage} exact />
                <Route path="/projects" component={ProjectsPage} exact />
            </Switch>
        </Router>
    );
}

export default App;
