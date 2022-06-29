import React, {Component} from 'react';
import './index.css';
import { NavLink, Navigate } from 'react-router-dom';

class Navbar extends Component{

  search = React.createRef();

  state = {
    search: "",
    redirect: false
  };

  formular = (e) => {
    e.preventDefault();
    let brewerie = this.search.current.value;
    console.log(brewerie);
    this.setState({
      search: brewerie,
      redirect: true
    });
  }

  render(){

    if(this.state.redirect){
      return (
        <Navigate to={'/search/'+this.state.search}/>
      )
    }

    return (
      <nav className="navbar">
        <div className="bar">
          <h1><NavLink to="/">Let's have a drink!</NavLink></h1>

          <div className="menu">
            <div><NavLink to="/cities" activeClassName="active">Cities</NavLink></div>
            <div><NavLink to="/beers" activeClassName="active">Beers</NavLink></div>
            <form onSubmit={this.formular}>
              <input type="text" name="search" ref={this.search}/>
              <input type="submit" value="Search"/>
            </form>

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
