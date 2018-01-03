import React, {Component} from 'react';

class Victory extends Component {
  constructor(props){
    super(props)
    
    this.restart = this.restart.bind(this);
    this.exit = this.exit.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('click', this.exit);
  }

  restart() {
    location.reload();
  }

  exit(e) {
    if (e.target.className === "modal") {
      const modal = document.getElementsByClassName('modal')[0];
      modal.style.display = "none";
    }
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
