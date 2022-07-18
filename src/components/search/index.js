import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './index.css';

const Search = () => {

  let search = useParams().brew;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://api.openbrewerydb.org/breweries/search?query='+search+'&per_page=6')
      .then(
        res => {
          setIsLoaded(true);
          setItems(res.data)
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [search])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="search">
        <h1>{search}</h1>

        <ul className="beer">
          {items.map(beer => (
          <li key={beer.id}>
              <a href={beer.website_url}>{beer.name} - {beer.brewery_type}</a>
              <p>{beer.country} - {beer.state}</p>
              <p>{beer.city}</p>
              {beer.phone && (
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
