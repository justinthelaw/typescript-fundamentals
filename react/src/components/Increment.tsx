import React from "react";
import "./Increment.css";

interface CounterState {
  cookieJar: number;
}

export default class Increment extends React.Component<{}, CounterState> {
  state: CounterState = {
    cookieJar: 1,
  };

  // increments the numbe rof cookies in the jar
  private incrementCounter() {
    this.setState({
      cookieJar: this.state.cookieJar + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.incrementCounter()}>Add a Cookie!</button>
        <div>
          <h5>
            {this.state.cookieJar}
            {this.state.cookieJar > 1 ? " Cookies" : " Cookie"}
          </h5>
          {Array.from(Array(this.state.cookieJar), (_, i) => {
            return <React.Fragment key={i}>🍪</React.Fragment>;
          })}
        </div>
      </div>
    );
  }
}
