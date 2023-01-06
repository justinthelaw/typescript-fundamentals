import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { DEFAULT_NAME } from "../constants/constants";
import userEvent from "@testing-library/user-event";

test("renders App", () => {
  render(<App />);
});

test("renders name input label", () => {
  render(<App />);
  // gets the input label
  const inputLabelElement: string =
    screen.getByText(/Enter Your Name:/i).innerHTML;
  expect(inputLabelElement).toBeTruthy();
});

test("renders name input area", () => {
  render(<App />);
  // gets the input box
  const inputElement: HTMLElement = screen.getByRole("textbox");
  expect(inputElement).toBeTruthy();
});

test("renders the user welcome message", () => {
  render(<App />);
  // gets the message by text
  const messageElement: string = screen.getByText(
    `Hello, ${DEFAULT_NAME}`
  ).innerHTML;
  expect(messageElement).toBeTruthy();
});

test("renders state changes for user welcome message", () => {
  render(<App />);
  // mock a new change state
  const newUserNameState: string = "New User";
  const input: HTMLElement = screen.getByRole("textbox");
  userEvent.clear(input);
  userEvent.type(input, newUserNameState);
  // gets the message by text
  const messageElement: string = screen.getByText(
    `Hello, ${newUserNameState}`
  ).innerHTML;
  expect(messageElement).toBeTruthy();
});
