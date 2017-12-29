import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classNames: `grid ${this.props.color}`
    }
  }

  render() {
    return (
      <div className={this.state.classNames}></div>
    )
  }
}

export default Card;
