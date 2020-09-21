import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup, screen } from "@testing-library/react";
import Home from "./Home";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

test("should take a snapshot", () => {
  const { asFragment } = render(
    <Router>
      <Home />
    </Router>
  );

  expect(
    asFragment(
      <Router>
        <Home />
      </Router>
    )
  ).toMatchSnapshot();
});

test("Renders without crashing", () => {
  const { getByText } = render(
    <Router>
      <Home />
    </Router>
  );

  getByText("Welcome to the Trivia Challenge!");
  getByText("You will be presented with 10 True or False questions.");
  getByText("Can you score 100%");
  getByText("BEGIN");

  const button = getByText("BEGIN");
  userEvent.click(button);
});
