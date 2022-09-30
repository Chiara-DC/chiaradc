import "./styles/globals.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
        <Route path="/blog/:blogId" element={<Blog />} />
      </Routes>
    </Router>
  );
}
