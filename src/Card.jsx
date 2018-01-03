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

    props.colorPromise.then(response => {this.color = response.data.color});
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
      class: 'card',
      display: 'hidden'
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
    if (cardOne.color === cardTwo.color) {
      console.log('found a match');
      cardOne.lockCard();
      cardTwo.lockCard();
      cardOne.props.addMatchedPair();
      cardOne.props.setSelectedCard(null);
    } else {
      window.setTimeout(() => {
        cardOne.resetClass();
        cardTwo.resetClass();
      }, 1000);
      cardOne.props.setSelectedCard(null);
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
        class: 'card',
        display: 'show clicked',
      });
      if (this.props.selectedCard !== this) {
        this.props.selectedCard.toggleColor();
      }
    }
  }

  render() {
    return (
      <div className={this.state.class} onClick={this.clickEvents}>
        <img className={this.state.display} src={this.color}></img>
      </div>
    )
  }
}

export default Card;
