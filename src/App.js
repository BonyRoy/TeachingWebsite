import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";

import Hobbies from "./Hobbies";
import Research from "./Research";
import Subjects from "./Subjects";
import Books from "./Books";
import CaseStudies from "./CaseStudies";
import Navbar from "./Navbar";
import Chatbox from "./Chatbox";

import { Routes ,Route } from 'react-router-dom';

const App =()=>{
    return(
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Hobbies" element={<Hobbies/>}/>
            <Route path="/Research" element={<Research/>}/>
            <Route path="/Subjects" element={<Subjects/>}/>
            <Route path="/Books" element={<Books/>}/>
            <Route path="/CaseStudies" element={<CaseStudies/>}/>
            <Route path="/Chatbox" element={<Chatbox/>}/>
        </Routes>
        </>
        );
};

export default App;
