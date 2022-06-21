import React, {Component} from 'react';
import  { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cities from './components/Cities/index';
import Card from './components/card/index';
import Error from './components/error/index';
import Navbar from './components/navbar/index';
import Beers from './components/beers/index';

class Router extends Component {

  render(){
    return (
      <BrowserRouter>
        <Navbar/>

        {/* Routes */}
        <Routes>
          <Route exact path="/" element={<Card/>}/>
          <Route path="/home" element={<Card/>}/>
          <Route path="/beers" element={<Beers/>}/>
          <Route path="/cities" element={<Cities/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
