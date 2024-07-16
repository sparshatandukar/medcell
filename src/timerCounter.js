import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerValue: 0,  // State managed by React
    };
    this.timerId = null;
  }

  startTimer = () =>{
    if(!this.timerId){
      this.timerId = setInterval(() =>{
        this.setState((prevState) => ({
          timerValue: prevState.timerValue +1,
        }));
      },1000);
    }
  };

stopTimer = () =>{
  if(this.timerId){
    clearInterval(this.timerId);
    this.timerId = null;
  }
};
  render() {
    return (
      <div>
        <h1>Timer: {this.state.timerValue}</h1>
        <button onClick={this.startTimer}>Start Timer</button>
        <button onClick={this.stopTimer}>Stop Timer</button>
      </div>
    );
  }
}

export default Timer;