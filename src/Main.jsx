import React, { Component } from 'react';
import Card from './card';

class Main extends Component {
  constructor(props) {
    super(props)
    this.setSelectedCard = this.setSelectedCard.bind(this);
    this.generateCards = this.generateCards.bind(this);
    this.addMatchedPair = this.addMatchedPair.bind(this);
    this.state = {
      colors: [],
      selectedCard: null,
      matchedPairs: 0,
    }
  }

  componentDidUpdate() {
    if (this.state.matchedPairs === this.state.colors.length/2) {
      console.log('yay');
    }
  }

  addMatchedPair() {
    this.setState({
      matchedPairs: this.state.matchedPairs + 1,
    })
  }

  setSelectedCard(card) {
    this.setState({
      selectedCard: card
    })
  }

  componentDidMount() {
    this.setState({
      colors: [
        "blue", "green", "red", "yellow",
        "blue", "green", "red", "yellow",
        "blue", "green", "red", "yellow",
        "blue", "green", "red", "yellow"
      ]
    })
  }

  generateCards() {
    var list = []
    for (var i = 0; i < this.state.colors.length; i++) {
      list.push(
        <Card
          color={this.state.colors[i]}
          setSelectedCard={this.setSelectedCard}
          selectedCard={this.state.selectedCard}
          addMatchedPair={this.addMatchedPair}
          />
      )
    }
    return list
  }

  render() {
    return (
      <div className="container">
        <div className="grid-wrapper">
          {this.generateCards()}
        </div>
      </div>
    )
  }
}

export default Main;
