import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './index.css';

const Search = () => {

  // Getting param from path
  let search = useParams().brew;

  // State hook
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Request with hook
  useEffect(() => {
    axios.get('https://api.openbrewerydb.org/breweries/search?query='+search+'&per_page=6')
      .then(
        // Setting data and load check
        res => {
          setIsLoaded(true);
          setItems(res.data)
        },
        // Setting error and load check
        error => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [search]) // If search update run hook again

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="load">Loading...</div>;
  } else {
    return (
      <div className="search">
        <h1>{search}</h1>

        <ul className="beer">
          {/* Mapping items */}
          {items.map(beer => (
          <li key={beer.id}>
              <a href={beer.website_url}>{beer.name} - {beer.brewery_type}</a>
              <p>{beer.country} - {beer.state}</p>
              <p>{beer.city}</p>
              {beer.phone && ( // If phone exists
                <span>Phone: {beer.phone}</span>
              )}
          </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Search;
