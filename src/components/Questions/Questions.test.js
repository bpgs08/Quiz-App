import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Questions from "./Questions";

test("it works", () => {
  const { getByText, getByLabelText } = render(<Questions />);
});
