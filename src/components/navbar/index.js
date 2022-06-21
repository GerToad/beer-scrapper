import React, {Component} from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component{

  render(){

    return (
      <nav className="navbar">
        <div className="bar">
          <h1><NavLink to="/">Let's drink</NavLink></h1>

          <ul className="menu">
            <li>
              <NavLink to="/cities" activeClassName="active">Cities</NavLink>
            </li>
            <li><NavLink to="/beers" activeClassName="active">Beers</NavLink></li>
            <li><NavLink to="/home" activeClassName="active">Search</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
