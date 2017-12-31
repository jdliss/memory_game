import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: `card ${this.props.color}`
    }
    this.clickEvents = this.clickEvents.bind(this);
    this.toggleBorder = this.toggleBorder.bind(this);
    this.compareCards = this.compareCards.bind(this);
    this.resetClass = this.resetClass.bind(this);
  }

  clickEvents(e) {
    this.toggleBorder(e);
    this.compareCards();
  }

  resetClass() {
    this.setState({
      class: `card ${this.props.color}`      
    })
  }

  compareCards() {
    if (this.props.selectedCard === null) {
      this.props.setSelectedCard(this);
    } else if (this.props.selectedCard === this) {
      this.props.setSelectedCard(null);
      this.resetClass();
    } else {
      if (this.props.color === this.props.selectedCard.props.color) {
        console.log('winner winner chicken dinner');
      } else {
        console.log('lol no');
      }
      this.resetClass();
      this.props.selectedCard.resetClass();
      this.props.setSelectedCard(null);     
    }
  }

  toggleBorder(e) {
    // e.target.classList.toggle('clicked')
    this.setState({
      class: `card ${this.props.color} clicked`      
    })
  }

  render() {
    return (
      <div className={this.state.class} onClick={this.clickEvents} data-color={this.props.color}></div>
    )
  }
}

export default Card;
