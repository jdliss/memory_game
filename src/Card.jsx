import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'card',
      matched: false,
      display: 'hidden',
    }

    this.clickEvents = this.clickEvents.bind(this);
    this.toggleColor = this.toggleColor.bind(this);
    this.compareCards = this.compareCards.bind(this);
    this.resetClass = this.resetClass.bind(this);
    this.addBorder = this.addBorder.bind(this);

    props.colorPromise.then(response => {this.color = response.color});
  }

  addBorder() {
    this.setState({
      class: "card clicked"
    })
  }

  clickEvents() {
    if (!this.state.matched) {
      this.addBorder();
      this.toggleColor();
      this.compareCards();
    }
  }

  resetClass() {
    this.setState({
      class: 'card'
    })
  }

  compareCards() {
    if (this.props.selectedCard === null) {
      this.props.setSelectedCard(this);
    } else if (this.props.selectedCard === this) {
      this.props.setSelectedCard(null);
      this.resetClass();
    } else {
      this.compareCardsHelper(this, this.props.selectedCard);
    }
  }

  compareCardsHelper(cardOne, cardTwo) {
    if (cardOne.props.color === cardTwo.props.color) {
      console.log('found a match');
      cardOne.lockCard();
      cardTwo.lockCard();
      cardOne.props.addMatchedPair();
      cardOne.props.setSelectedCard(null);
    } else {
      window.setTimeout(() => {
        cardOne.resetClass();
        cardTwo.resetClass();
        cardOne.props.setSelectedCard(null);
      }, 1000);
      console.log('not a match, resetting');
    }
  }

  lockCard() {
    this.setState({
      matched: true,
      class: `card`,
      display: 'show',
    });
  }

  toggleColor() {
    if (this.props.selectedCard) {
      this.setState({
        class: 'card clicked',
        display: 'show',
      });
      if (this.props.selectedCard !== this) {
        this.props.selectedCard.toggleColor();
      }
    }
  }

  render() {
    return (
      <div className={this.state.class} onClick={this.clickEvents} data-color={this.color}>
        <img className={this.display} src={this.color}></img>
      </div>
    )
  }
}

export default Card;
