import '../css/App.css';
import Navbar from './Navbar';
import Home from './Home'
import Main from './Main'
import Experience from './Experience'
import Resume from './Resume'
import AboutPage from './AboutPage';
import {Route, Routes} from "react-router-dom"
import Modal from 'react-modal'
import React, {useState} from 'react'
// Make sure to import pages up here that you want to display


function App() {
  return (
    <div className="App">
        
        
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/about-page" element={<AboutPage/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
