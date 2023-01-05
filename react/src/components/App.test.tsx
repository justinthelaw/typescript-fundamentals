import { render, screen } from "@testing-library/react";
import App from "./App";
import { DEFAULT_NAME } from "../constants/constants";

test("renders App", () => {
  render(<App />);
});

test("renders name input label", () => {
  render(<App />);
  // gets the input label
  const inputLabelElement = screen.getByText(/Enter Your Name:/i).innerHTML;
  expect(inputLabelElement).toBeTruthy();
});

test("renders name input area", () => {
  render(<App />);
  // gets the input box
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeTruthy();
});

test("renders the user welcome message", () => {
  render(<App />);
  // gets the message by text
  const messageElement = screen.getByText(`Hello, ${DEFAULT_NAME}`).innerHTML;
  expect(messageElement).toBeTruthy();
});
