import React, {Component} from 'react';
import './index.css';

class Navbar extends Component{

  render(){
    let data = {
      name: "Hanz",
      surname: "Zimmer",
      arbeit: "Musician"
    }
    /*<li>{data.name}</li>
    <li>{data.surname}</li>
    <li>{data.arbeit}</li>*/

    return (
      <nav className="navbar">
        <div className="bar">
          <h1>Grab a drink</h1>
          <ul>
            <li><a href="#">Cities</a></li>
            <li><a href="#">Bears</a></li>
            <li><a href="#">Search</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
