import React from "react";
import "./clock.css";

class Clock extends React.Component {
  timerId = 0;

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      day: true,
    };
    console.log("contructor called");
  }

  render() {
    console.log("render called");
    return (
      <div className={`clock ${!this.state.day ? "night" : ""}`}>
        <h1>Hello,world!</h1>
        <h2>it's {this.state.date.toLocaleTimeString()} ⏰</h2>
      </div>
    );
  }

  tick() {
    this.setState({
      date: new Date(),
      day: this.state.date >= 17,
    });
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
    if (this.state.day) {
      console.log("day");
    } else {
      console.log("night");
    }
  }

  componentDidWillUnmount() {
    clearInterval(this.timerId);
  }
}

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello,world!</h1>
//       <h2>it's {props.date.toLocaleTimeString} ⏰</h2>
//     </div>
//   );
// }

export default Clock;
