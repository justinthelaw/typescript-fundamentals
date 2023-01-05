import React from "react";
import "./Increment.css";

interface CounterState {
  appCounter: number;
}

export default class Increment extends React.Component<{}, CounterState> {
  state: CounterState = {
    appCounter: 1,
  };

  private incrementCounter() {
    this.setState({
      appCounter: this.state.appCounter + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.incrementCounter()}>Add a Cookie!</button>
        <div>
          <h5>
            {this.state.appCounter}{" "}
            {this.state.appCounter > 1 ? "Cookies" : "Cookie"}
          </h5>
          {Array.from(Array(this.state.appCounter), (_, i) => {
            return <React.Fragment key={i}>🍪</React.Fragment>;
          })}
        </div>
      </div>
    );
  }
}
