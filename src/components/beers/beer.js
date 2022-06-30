import axios from 'axios';
import React, {Component} from 'react';

class Beer extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      prevProps: {beer: ""}
    };
  }

  componentDidMount(){
    this.getBeers(this.state.prevProps);
  }

  componentDidUpdate(){
    this.getBeers(this.state.prevProps);
  }

  getBeers = (prevProps) => {
    if(this.props.beer !== prevProps.beer){
      axios.get('https://api.openbrewerydb.org/breweries/'+this.props.beer)
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
      }else{
        console.log("It's all");
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
            <li key={items.id}>
                <a href={items.website_url}>{items.name} - {items.brewery_type}</a>
                <p>{items.country} - {items.state}</p>
                <p>{items.city}</p>
                {items.phone && (
                  <span>Phone: {items.phone}</span>
                )}
            </li>
        </ul>
      );
    }
  }
}

export default Beer;
