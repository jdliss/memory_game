import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholder = null
    }
  }

  render() {
    return (
      <div> This is a card </div>
    )
  }
}

export default Card;