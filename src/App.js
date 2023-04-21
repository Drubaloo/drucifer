// dependancies
import { useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Homepage from './pages/Homepage';
import Navbar from "./components/navbar/Navbar"
import './App.css';
// import BackgroundShapes from './components/backgroundShapes';
import Portfolio from './pages/Portfolio';
import Background002 from './components/Background002';
import Landing from './pages/Landing';



function App() {

  const [spin, setSpin] = useState(false)

  function toggle() {
    console.log("test")
    setSpin(!spin)
  }

  const styleSheet = {
    parent: {
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
      <Background002 start={spin} />
      <Router>
        <Navbar />
        <div style={styleSheet.parent}>
          <Routes>
            <Route exact path="/drucifer/portfolio" element={<Portfolio />} />

            <Route exact path="/drucifer/contact" element="<h1>contact</h1>" />

            <Route exact path="*" element={<Homepage />} />

            <Route exact path="/drucifer/" element={<Landing toggle={toggle} />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
