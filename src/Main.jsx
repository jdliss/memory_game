import React, { Component } from 'react';
import Card from './card';
import Victory from './Victory';
import axios from 'axios';

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
      const modal = document.getElementsByClassName('modal')[0];
      setTimeout(() => {
        modal.style.display = "block";
      }, 1000);
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
          colorPromise={axios.get(`http://localhost:9292/colors/${this.state.colors[i]}`)}
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
      <div>  
        <div className="container">
          <div className="grid-wrapper">
            {this.generateCards()}
          </div>
        </div>
        <Victory matchedPairs={this.state.matchedPairs}/>
      </div>
    )
  }
}

export default Main;
