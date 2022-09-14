import React, {Component} from "react";
import '../App.css';

export class Nav extends Component{

      render(){
        return (
            <nav className="nav">
              <h3> Logo  </h3>
              <ul className="nav-links">
                <li> About </li>
                <li> Shop </li>
              </ul>
            </nav>
          )
      }
}
