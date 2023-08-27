import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/style.css";


class QuizBee extends Component 
{

  state = { show: false }

  handleClick() {
    this.setState({ show: true });
  }

  render() {
    const { show } = this.state;
  return (
    <div >
          <div className="title">Quiz App</div>
          {!this.state.show? (
            <center>
              <div className="plbt">
            <button className="playBtn2" onClick={() => this.handleClick()}>
              Start Quiz
            </button>
            </div>
            </center>
            
          ) : null}
          
          { show && <App /> }
    </div>
 
  );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));
