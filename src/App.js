import React from 'react';
import './App.css';
import {About} from "./components/About";
import {Nav} from "./components/Nav";
import Shop from "./components/Shop";
import ItemDetail from "./components/ItemDetail";
// To Handle Routing; BrowserRouter
// Switch has been replaced by "Routes"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//About will only show whenever I go to the page
// "/" the homepage of the website
function App() {
  return (

<Router>
    <div className="App">
    <Nav/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/shop" element={<Shop/>} />
       <Route path="/shop/:Id" element={<ItemDetail/>} />
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
