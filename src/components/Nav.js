import React, {Component} from "react";
import '../App.css';
// Link takes only one prop which is to
import { Link } from 'react-router-dom';

// Color for the Link Component

const navStyle = {

  color: 'white'
};

export class Nav extends Component{



      render(){
        return (
            <nav className="nav">
              <h3> Logo  </h3>
              <ul className="nav-links">

                <Link style={navStyle} to='/about'>
                <li> About </li>
                </Link>

                <Link style={navStyle} to='/shop'>
                <li> Shop </li>
                </Link>

              </ul>
            </nav>
          )
      }
}
