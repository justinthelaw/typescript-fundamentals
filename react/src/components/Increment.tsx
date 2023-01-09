import React from "react";
import "./Increment.css";
import {
  COOKIE_BUTTON_NAME,
  COOKIE_EAT_BUTTON_NAME,
} from "../constants/constants";
import { getCookie } from "../helpers/cookieFuncs";

interface CounterState {
  cookieJar: number;
  username: string;
}

export default class Increment extends React.Component<
  { username: string },
  CounterState
> {
  state: CounterState = {
    cookieJar: parseInt(getCookie("cookieJar")) || 0,
    username: this.props.username,
  };

  componentDidUpdate(): void {
    // ensure re-render on name change
    if (this.props.username !== this.state.username) {
      this.setState({
        username: this.props.username,
      });
    }
  }

  componentDidMount(): void {
    // grab existing cookies in browser
    this.setState({
      cookieJar: this.determineBrowserCookies(),
    });
  }

  // increments the number of cookies in the jar
  private addCookie(): void {
    this.setState({
      cookieJar: this.state.cookieJar + 1,
    });
    document.cookie = `cookieJar=${this.state.cookieJar + 1}`;
    return;
  }

  // deletes all cookies
  private deleteCookies(): void {
    this.setState({
      cookieJar: 0,
    });
    document.cookie = `cookieJar=${0}`;
    return;
  }

  // prints the correct number of cookies
  private printCookies(): string {
    let jar: string = "";
    if (this.state.cookieJar > 0) {
      Array.from(Array(this.state.cookieJar), () => {
        return (jar += "🍪");
      });
    }
    return jar;
  }

  private determineBrowserCookies(): number {
    return parseInt(getCookie("cookieJar")) || 0;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.addCookie()}>{COOKIE_BUTTON_NAME}</button>
        <button onClick={() => this.deleteCookies()}>
          {COOKIE_EAT_BUTTON_NAME}
        </button>
        <div>
          <h5>
            {this.state.username + " has "}
            {this.state.cookieJar}
            {this.state.cookieJar > 1 || this.state.cookieJar < 1
              ? " Cookies"
              : " Cookie"}
          </h5>
          <h5>
            {this.determineBrowserCookies() > 1 ||
            this.determineBrowserCookies() < 1
              ? "There are "
              : "There is "}
            {getCookie("cookieJar")}
            {this.determineBrowserCookies() > 1 ||
            this.determineBrowserCookies() < 1
              ? " Browser Cookies"
              : " Browser Cookie"}
          </h5>
          <div>{this.printCookies()}</div>
        </div>
      </div>
    );
  }
}
