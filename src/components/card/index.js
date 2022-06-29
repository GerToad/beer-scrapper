import React, {Component} from 'react';
import axios from 'axios';
import './index.css';

class Card extends Component{

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

  getBeers = () => {
    axios.get('https://api.openbrewerydb.org/breweries?per_page=10')
      .then(res => {
        this.setState({
          isLoaded: true,
          items: res.data
        });
        // Total breweries
        var breweries = []
        for(let brew of this.state.items){
          breweries.push({id: brew.id, name: brew.name});
        }
          console.log(breweries);
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
        <div>
          <header className="App-header">
            <p className="banner">Have you been looking for a different beer? We got you</p>
          </header>
          <div className="card">
            <h2>Choose a beer!</h2>
            <section>
              <img src={require("../../assets/images.jpeg")} alt="beer"/>
              <p className="intro">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
            </section>
          </div>
          <div className="service">
            <ul className="beer">
                {items.map(beer => (
                  <li key={beer.id}>
                    <a href={beer.website_url}>{beer.name} - {beer.brewery_type}</a>
                    <p>{beer.country} - {beer.state}</p>
                    <p>{beer.city}</p>
                    <span>Phone: {beer.phone}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Card;
