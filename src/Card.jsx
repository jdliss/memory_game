import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props)
    this.class = `card ${this.props.color}`
    this.clickEvents = this.clickEvents.bind(this)
    this.toggleBorder = this.toggleBorder.bind(this);
    this.compareCards = this.compareCards.bind(this)
  }

  clickEvents(e) {
    this.toggleBorder(e);
    this.compareCards();
  }

  compareCards() {
    if (this.props.selectedCard === null) {
      this.props.selectedCard = this;
    } else if (this.props.selectedCard === this) {
      this.props.selectedCard = null
    } else {
      if (this.props.color === this.props.selectedCard.props.color) {
        console.log('winner winner chicken dinner');
      } else {
        console.log('lol no');
      }
    }
  }

  toggleBorder(e) {
    e.target.classList.toggle('clicked')
  }

  render() {
    return (
      <div className={this.class} onClick={this.clickEvents} data-color={this.props.color}></div>
    )
  }
}

export default Card;
