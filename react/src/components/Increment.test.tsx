import React from "react";
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

// generates a random number of clicks
function randomClicks(maximum: number): number {
  let clicks: number = maximum;
  clicks = Math.floor(clicks * Math.random());
  return clicks;
}

test("pressing cookie button X number of times changes state", () => {
  render(<Increment />);
  // gets button using expected button text
  const buttonElement: HTMLElement = screen.getByRole("button", {
    name: COOKIE_BUTTON_NAME,
  });
  // clicks button a random number of times
  let numberOfClicks: number = randomClicks(100);
  for (let i: number = 0; i < numberOfClicks; i++) {
    userEvent.click(buttonElement);
  }

});
