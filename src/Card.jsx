import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props)
    this.class = `grid ${this.props.color}`
  }

  render() {
    return (
      <div className={this.class}></div>
    )
  }
}

export default Card;
