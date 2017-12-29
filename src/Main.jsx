import React, { Component } from 'react';
// import Card from './card';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholder = null
    }
  }

  render() {
    return (
      <div>
        <div> Main Page </div>
        <Card />
      </div>
    )
  }
}