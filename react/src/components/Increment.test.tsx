import React, { Fragment } from "react";
import { render, screen } from "@testing-library/react";
import Increment from "./Increment";
import { COOKIE_BUTTON_NAME } from "../constants/constants";
import userEvent from "@testing-library/user-event";

test("renders Increment", () => {
  render(<Increment />);
});

test("renders button to add a cookie", () => {
  render(<Increment />);
  // gets button using expected button text
  const buttonElement: HTMLElement = screen.getByRole("button", {
    name: COOKIE_BUTTON_NAME,
  });
  expect(buttonElement).toBeTruthy();
});

// generates a random number of clicks between 1-100
function randomClicks(): number {
  let clicks: number = 100;
  clicks = Math.floor(clicks * Math.random());
  return clicks;
}

test("pressing cookie button X number of times changes cookie message", () => {
  render(<Increment />);
  // gets button using expected button text
  const buttonElement: HTMLElement = screen.getByRole("button", {
    name: COOKIE_BUTTON_NAME,
  });
  // clicks button a random "X" number of times
  let numberOfClicks: number = randomClicks();
  for (let i: number = 1; i < numberOfClicks; i++) {
    userEvent.click(buttonElement);
  }
  // gets message state
  const message: string = screen.getByText(
    /\b([0-9]|[1-9][0-9]|100)\b Cookie/
  ).innerHTML;
  // determines correct message
  let pluralOrSingular: string = numberOfClicks > 1 ? "Cookies" : "Cookie";
  expect(message).toEqual(`${numberOfClicks} ${pluralOrSingular}`);
});

test("pressing cookie button X number of times changes number of cookies on screen", () => {
  render(<Increment />);
  // gets button using expected button text
  const buttonElement: HTMLElement = screen.getByRole("button", {
    name: COOKIE_BUTTON_NAME,
  });
  // clicks button a random "X" number of times
  let numberOfClicks: number = randomClicks();
  for (let i: number = 1; i < numberOfClicks; i++) {
    userEvent.click(buttonElement);
  }
  console.log(numberOfClicks)
  // gets all cookies
  const cookiesInTheJar: string = (screen
    .getByText(/🍪/i).innerHTML)
  expect(cookiesInTheJar.split("").length).toEqual(numberOfClicks);
});
