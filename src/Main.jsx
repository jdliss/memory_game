import React, { Component } from 'react';
import Card from './card';

class Main extends Component {
  constructor(props) {
    super(props)
    this.generateCards = this.generateCards.bind(this)
    this.state = {
      colors: []
    }
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
    console.log(this.state.colors.length)
    for (var i = 0; i < this.state.colors.length; i++) {
      list.push(<Card color={this.state.colors[i]} />)
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
