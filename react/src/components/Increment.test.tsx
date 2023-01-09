import { render, screen } from "@testing-library/react";
import Increment from "./Increment";
import App from "./App";
import { COOKIE_BUTTON_NAME, DEFAULT_NAME } from "../constants/constants";
import userEvent from "@testing-library/user-event";
import { getCookie } from "../helpers/cookieFuncs";

// helper functions for this test file
// generates a random number of clicks between 1-100
function randomClicks(): number {
  let clicks: number = 10;
  clicks = Math.floor(clicks * Math.random());
  return clicks;
}

// tests begin
test("renders Increment", () => {
  render(<Increment username={DEFAULT_NAME} />);
});

test("changing name in App changes the Increment message name", () => {
  render(<App />);
  // mock a new change state
  const newUserNameState: string = "New User";
  const input: HTMLElement = screen.getByRole("textbox");
  userEvent.clear(input);
  userEvent.type(input, newUserNameState);
  // gets the message by text
  const messageElement: string = screen.getByText(`${newUserNameState} has`, {
    exact: false,
  }).innerHTML;
  expect(messageElement).toBeTruthy();
});

test("renders button to add a cookie", () => {
  render(<Increment username={DEFAULT_NAME} />);
  // gets button using expected button text
  const buttonElement: HTMLElement = screen.getByRole("button", {
    name: COOKIE_BUTTON_NAME,
  });
  expect(buttonElement).toBeTruthy();
});

test("pressing cookie button X number of times changes cookie message", () => {
  render(<Increment username={DEFAULT_NAME} />);
  // gets button using expected button text
  const buttonElement: HTMLElement = screen.getByRole("button", {
    name: COOKIE_BUTTON_NAME,
  });
  // clicks button a random "X" number of times
  let numberOfClicks: number = randomClicks();
  for (let i: number = 0; i < numberOfClicks; i++) {
    userEvent.click(buttonElement);
  }
  // gets message state
  const message: string = screen.getByText(
    /\b([0-9]|[1-9][0-9]|100)\b Cookie/
  ).innerHTML;
  // determines correct message
  let pluralOrSingular: string = numberOfClicks > 1 ? "Cookies" : "Cookie";
  expect(message).toContain(`${numberOfClicks} ${pluralOrSingular}`);
});

test("pressing cookie button X number of times changes number of cookies on screen", () => {
  render(<Increment username={DEFAULT_NAME} />);
  // gets button using expected button text
  const buttonElement: HTMLElement = screen.getByRole("button", {
    name: COOKIE_BUTTON_NAME,
  });
  // clicks button a random "X" number of times
  let numberOfClicks: number = randomClicks();
  for (let i: number = 0; i < numberOfClicks; i++) {
    userEvent.click(buttonElement);
  }
  // gets all cookies
  const cookiesInTheJar: string = screen.getByText(/🍪/i).innerHTML;
  // cookie emoji is length of 2
  expect(cookiesInTheJar.length / 2).toEqual(numberOfClicks);
});

