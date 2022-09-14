import React from 'react';
import './App.css';
import {About} from "./components/About";
import {Nav} from "./components/Nav";
import {Shop} from "./components/Shop";
// To Handle Routing; BrowserRouter
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//About will only show whenever I go to the page

function App() {
  return (

<Router>
    <div className="App">
    <Nav/>
     <Switch>
       <Route path="/" component={Home} />
       <Route path="/about" component={About} />
       <Route path="/shop" component={Shop} />
     </Switch>
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
