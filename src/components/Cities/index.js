import React, {Component} from 'react';
import './index.css';
import City from './city';

class Cities extends Component{

  // State
  constructor(props){
    super(props);
    this.state = {
      city: "san_diego"
    };
  }

  // Cities list
  cities = [
    {value: "san_diego", key: "San diego"},
    {value: "windsor", key: "Windsor"},
    {value: "fayetteville", key: "Fayetteville"},
    {value: "miami", key: "Miami"},
    {value: "boring", key: "Boring"},
    {value: "chardon", key: "Chardon"},
    {value: "san_jose", key: "San Jose"},
    {value: "sylvania", key: "Sylvania"},
    {value: "gloucester", key: "Gloucester"},
    {value: "quinter", key: "Quinter"},
  ]

  // Setting state
  change = (event) =>{
    console.log(event.target.value);
    this.setState({
      city: event.target.value
    });
  }

  render(){
    return(
        <div className="cities">
          <h1>This are the cities where you can get a beer!</h1>

          {/* Fucntion trigger */}
          <select placeholder='Select option' className="selector" onChange={this.change}>
            {this.cities.map(city => (
              <option value={city.value}>{city.key}</option>
            ))}
          </select>

          {/* City request */}
          <City
            city={this.state.city}
          />
        </div>
    )
  }
}

export default Cities;
