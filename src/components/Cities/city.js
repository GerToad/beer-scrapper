import axios from 'axios';
import React, {Component} from 'react';

class City extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      prevProps: {city: ""}
    };
  }

  componentDidMount(){
    this.getBeers(this.state.prevProps);
  }

  componentDidUpdate(){
    this.getBeers(this.state.prevProps);
  }

  getBeers = (prevProps) => {
    if(this.props.city !== prevProps.city){
      axios.get('https://api.openbrewerydb.org/breweries?by_city='+this.props.city+'&per_page=4')
        .then(res => {
          this.setState({
            isLoaded: true,
            items: res.data,
            prevProps: this.props
          });
        })
        .catch(error => {
          this.setState({
            isLoaded: true,
            error: error,
            prevProps: this.props
          });
        });
    }
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
