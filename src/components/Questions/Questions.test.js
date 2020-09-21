import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { render, waitFor, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Questions from "./Questions";

afterEach(cleanup);

test("should take a snapshot", () => {
  const title = "This is a Question Title";
  // true question number is questionNumber + 1
  const questionNumber = 2;
  const questionContent = `<p>content</p>`;
  const { asFragment } = render(
    <Questions
      currentQuestion={questionNumber}
      currentQuestionTitle={title}
      currentQuestionContent={questionContent}
    />
  );

  expect(
    asFragment(
      <Questions
        currentQuestion={questionNumber}
        currentQuestionTitle={title}
        currentQuestionContent={questionContent}
      />
    )
  ).toMatchSnapshot();
});

test("Renders without crashing", async () => {
  const title = "This is a Question Title";
  // true question number is questionNumber + 1
  const questionNumber = 2;
  const questionContent = `<p>content</p>`;
  const { getByText, getByLabelText } = render(
    <Questions
      currentQuestion={questionNumber}
      currentQuestionTitle={title}
      currentQuestionContent={questionContent}
    />
  );

  getByText("This is a Question Title");
  getByText(`${questionNumber + 1} of 10`);
  getByText("TRUE");
  getByText("FALSE");
});

test("Loading Screen Works", () => {
  const { getByText } = render(<Questions />);

  getByText("Loading...");
});
