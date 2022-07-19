import React, {Component} from 'react';
import './index.css';
import Beer from './beer';

class Beers extends Component{

  // Constructor for state and props
  constructor(props){
    super(props);
    this.state = {
      beer: "madtree-brewing-cincinnati"
    };
  }

  // Beers brief list to be display
  beers = [
    {value: "madtree-brewing-cincinnati", key: "MadTree Brewing"},
    {value: "banjo-brewing-fayetteville", key: "Banjo Brewing"},
    {value: "barrel-brothers-brewing-company-windsor", key: "Barrel Brothers Brewing Company"},
    {value: "bay-brewing-company-miami", key: "Bay Brewing Company"},
    {value: "bent-shovel-brewing-oregon-city", key: "Bent Shovel Brewing"},
    {value: "snow-belt-brew-chardon", key: "Snow Belt Brew"},
    {value: "brubakers-brewery-and-pub-sylvania", key: "Brubaker's Brewery & Pub"},
    {value: "camino-brewing-co-llc-san-jose", key: "Camino Brewing Co LLC"},
    {value: "cape-ann-lanes-gloucester", key: "Cape Ann Lanes"},
    {value: "center-pivot-quinter", key: "Center Pivot"},
  ]

  // Setting state from select/option
  change = (event) =>{
    this.setState({
      beer: event.target.value
    });
  }

  render(){
    return(
        <div className="beers">
          <h1>Here you can find your favorite beer!!!</h1>

          <select placeholder='Select option' className="beer_selector" onChange={this.change}>
            {this.beers.map(beer => (
              <option value={beer.value}>{beer.key}</option>
            ))}
          </select>

          {/* Request from Beer component passing the beer on props */}
          <Beer
            beer={this.state.beer}
          />
        </div>
    )
  }
}

export default Beers;
