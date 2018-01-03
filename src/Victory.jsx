import React, {Component} from 'react';

class Victory extends Component {
  constructor(props){
    super(props)
    
    this.restart = this.restart.bind(this);
  }

  restart() {
    location.reload();
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <h1 id="victory">Nice job!</h1>
          <button id="try-again" onClick={this.restart}>Try again?</button>
        </div>
      </div>
    )
  }

}

export default Victory;
