import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props)
    this.class = `card ${this.props.color}`
    
    this.displayColor = this.displayColor.bind(this);
  }

  displayColor() {
    console.log(this.props.color);
  }

  render() {
    return (
      <div className={this.class} onClick={this.displayColor}></div>
    )
  }
}

export default Card;
