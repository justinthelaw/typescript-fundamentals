import React from "react";
import "./Increment.css";
import { COOKIE_BUTTON_NAME } from "../constants/constants";

interface CounterState {
  cookieJar: number;
}

export default class Increment extends React.Component<{}, CounterState> {
  state: CounterState = {
    cookieJar: 1,
  };

  // increments the numbe rof cookies in the jar
  private incrementCounter(): void {
    this.setState({
      cookieJar: this.state.cookieJar + 1,
    });
    return;
  }

  // prints the correct number of cookies
  private printCookies(): string {
    let jar: string = "";
    Array.from(Array(this.state.cookieJar), (_, i) => {
      return (jar += "🍪");
    });
    return jar;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.incrementCounter()}>
          {COOKIE_BUTTON_NAME}
        </button>
        <div>
          <h5>
            {this.state.cookieJar}
            {this.state.cookieJar > 1 ? " Cookies" : " Cookie"}
          </h5>
          <p>{this.printCookies()}</p>
        </div>
      </div>
    );
  }
}
