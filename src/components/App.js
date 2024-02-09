
import React from "react";
import Home from "./Home";
import About from './About';
import Navbar from "./Navbar";

import './../styles/App.css';

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />} />
          
        </Routes>
    </div>
  )
}

export default App
