import React from 'react';
import './App.css';
import {About} from "./components/About";
import {Nav} from "./components/Nav";
import {Shop} from "./components/Shop";
// To Handle Routing; BrowserRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//About will only show whenever I go to the page
// "/" the homepage of the website
function App() {
  return (

<Router>
    <div className="App">
    <Nav/>
     <Routes>
       <Route path="/" exact element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/shop" element={<Shop/>} />
     </Routes>
    </div>
</Router>
  );
}

const Home = () => (

  <div>
    <h1> Home Page </h1>
  </div>

);

export default App;
