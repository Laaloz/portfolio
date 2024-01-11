import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages";
import ProjectsPage from "./Pages/ProjectsPage";
import 'smoothscroll-polyfill';

// kick off the polyfill!
window.__forceSmoothScrollPolyfill__ = true;

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
