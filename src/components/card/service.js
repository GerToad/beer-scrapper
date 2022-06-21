import React, { Component, useState } from 'react';
import axios from 'axios';

class BeerService extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    const opts = {
      method: 'GET',
      url: 'https://api.openbrewerydb.org/breweries?per_page=10'
    };

    axios.request(opts).then(function (response) {
      this.setState({
        isLoaded: true,
        items: response.items
      });
    })
    .catch(function (error) {
      this.setState({
        isLoaded: true,
        error: error
      });
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if(error){
      return <div>Error: {error.message}</div>
    } else if (!isLoaded){
        return <div>Loading...</div>
    } else{
        return(
          <div className="service">
            <ul className="beer">
                {items.map(beer => (
                <li key={beer.id}>
                {beer.name} {beer.country}
                </li>
                ))}
            </ul>
          </div>
        );
    }
  }
}

const GetBreweries = () => {
  const opts = {
    method: 'GET',
    url: 'https://api.openbrewerydb.org/breweries?per_page=10'
  };

  const [er, setEr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [beers, setBeers] = useState([]);

  axios.request(opts).then(function (response) {
    setIsLoaded(true);
    setBeers(response.data)
    //beers = response.data;
    //console.log(beers);
  }).catch(function (error) {
    setIsLoaded(true);
    setEr(error)
    //console.log(error);
  });

    if(er){
        return <div>Error: {er}</div>
    } else if (!isLoaded){
        return <div>Loading...</div>
    } else{
        return(
          <div className="service">
            <ul className="beer">
                {beers.map(beer => (
                <li key={beer.id}>
                {beer.name} {beer.country}
                </li>
                ))}
            </ul>
          </div>
        )
    }
}

export default BeerService;
