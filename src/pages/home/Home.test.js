import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

test("it works", () => {
  const { getByText, getByLabelText } = render(
    <Router>
      <Home />
    </Router>
  );

  getByText("Welcome to the Trivia Challenge!");
  getByText("You will be presented with 10 True or False questions.");
  getByText("Can you score 100%");
  getByText("BEGIN");
});

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

// test("add to list", async () => {
//   const { getByText, getByLabelText } = render(
//     <Router>
//       <Home />
//     </Router>
//   );

//   getByText("Welcome to the Trivia Challenge!");
//   getByText("You will be presented with 10 True or False questions.");
//   getByText("Can you score 100%");
//   getByText("BEGIN");

//   const button = getByText("BEGIN");
//   userEvent.click(button);
//   await waitFor(() => getByText("BEGINs"));
// });
