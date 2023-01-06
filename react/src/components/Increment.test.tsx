import React from "react";
import { render, screen } from "@testing-library/react";
import Increment from "./Increment";
import { COOKIE_BUTTON_NAME } from "../constants/constants";

test("renders Increment", () => {
  render(<Increment />);
});

test("renders button to add a cookie", () => {
  render(<Increment />);
  // gets button using expected button text
  const buttonElement: HTMLElement = screen.getByRole("button", {name: COOKIE_BUTTON_NAME});
  expect(buttonElement).toBeTruthy();
});
