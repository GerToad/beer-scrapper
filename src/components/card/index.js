import React, {Component} from 'react';
import './index.css';

class Card extends Component{

  render(){
    return(
      <div className="card">
        <h2>Choose a beer</h2>
        <section>
          <img src={require("../../assets/images.jpeg")} alt="beer"/>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
        </section>
      </div>
    )
  }
}

export default Card;
