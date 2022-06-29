import React, {Component} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './index.css';

const Search = () => {

  var search = useParams().brew;

  return(
    <h1>{search}</h1>
  )
}

export default Search;
