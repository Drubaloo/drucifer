// dependancies
import { useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Homepage from './pages/Homepage';
import Navbar from "./components/navbar/Navbar"
import './App.css';
import BackgroundShapes from './components/backgroundShapes';
import Portfolio from './pages/Portfolio';



function App() {

  const styleSheet = {
    parent:{
      display: "flex",
      zIndex: "100",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "center",
      height: "100dvh"
    }
  }

  return (
    <div>
      <BackgroundShapes />
      <Router>
          <Navbar />
        <div style={styleSheet.parent}>
          <Routes>
            <Route exact path="/portfolio" element={<Portfolio />} />

            <Route exact path="/contact" element="<h1>contact</h1>" />

            <Route exact path="/" element={<Homepage />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
