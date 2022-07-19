import React, {Component} from 'react';
import './index.css';
import { NavLink, Navigate } from 'react-router-dom';

class Navbar extends Component{

  // Form reference
  search = React.createRef();

  state = {
    search: "",
    redirect: false
  };


  // Take the form value and set it in state, also redirect
  formular = (e) => {
    e.preventDefault();
    let brewerie = this.search.current.value;
    this.setState({
      search: brewerie,
      redirect: true
    });
  }

  render(){

    // Redirect to search
    if(this.state.redirect){
      this.setState({
          redirect: false
      });
      return (
        <Navigate to={'/search/'+this.state.search}/>
      )
    }

    return (
      <nav className="navbar">
        <div className="bar">
          <h1><NavLink to="/">Let's have a drink!</NavLink></h1>

          <div className="menu">
            <div><NavLink to="/cities" activeclassname="active">Cities</NavLink></div>
            <div><NavLink to="/beers" activeclassname="active">Beers</NavLink></div>

            {/* Search form */}
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
