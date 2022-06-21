import axios from 'axios';
import React, {Component} from 'react';

class City extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount(){
    this.getBeers();
  }

  componentDidUpdate(){
    this.getBeers();
  }

  getBeers = () => {
    axios.get('https://api.openbrewerydb.org/breweries?by_city='+this.props.city+'&per_page=4')
      .then(res => {
        this.setState({
          isLoaded: true,
          items: res.data
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error: error
        });
      });
  }

  render(){
    const { error, isLoaded, items } = this.state;

    if(error){
      return <div>Error: {error.message}</div>
    } else if (!isLoaded){
      return <div>Loading...</div>
    } else{
      return(
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
      );
    }
  }
}

export default City;
