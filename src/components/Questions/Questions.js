import React from "react";
import styled from "styled-components";
import { space, media, colors } from "../../utils/theme";
import Headings from "../../components/Headings";

let Questions = ({
  currentQuestion,
  currentQuestionContent,
  currentQuestionTitle,
  submitAnswer,
}) => {
  return (
    <QuizContainer>
      {currentQuestionTitle && currentQuestionContent ? (
        <>
          <StyledHeading type={5} bold={true} align="center">
            {currentQuestionTitle}
          </StyledHeading>
          <QuestionContainer>
            <div dangerouslySetInnerHTML={{ __html: currentQuestionContent }} />
          </QuestionContainer>

          <NumberContainer>{currentQuestion + 1} of 10</NumberContainer>
          <ButtonContainer>
            <AnswerButton value="True" onClick={submitAnswer}>
              TRUE
            </AnswerButton>
            <AnswerButton value="False" onClick={submitAnswer}>
              FALSE
            </AnswerButton>
          </ButtonContainer>
        </>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </QuizContainer>
  );
};

const Loading = styled.div`
  display: flex;
  align-self: center;
`;

const StyledHeading = styled(Headings)`
  margin: ${space[3]} auto ${space[3]} auto;
  max-width: 180px;
  ${media.tablet`
    max-width: 225px;
  `}
`;

const QuestionContainer = styled.div`
  width: calc(100% - 52px);
  min-height: calc(300px - 52px);
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 25px;
  text-align: center;
  margin-top: auto;
  margin-bottom: ${space[3]};
  ${media.tablet`
    min-height: calc(400px - 52px);
  `}
`;

const NumberContainer = styled.div`
  margin-top: auto;
  text-align: center;
`;

const QuizContainer = styled.div`
  margin: 0px auto;
  padding: 0px ${space[3]};
  max-width: 300px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  ${media.tablet`
    margin: 0px auto;
    max-width: 400px;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: ${space[8]};
  margin-top: auto;
  justify-content: space-between;
`;

const AnswerButton = styled.button`
  cursor: pointer;
  color: black;
  padding: 10px;
  border: 1px solid ${colors.black};
  border-radius: 5px;
  width: 100px;
`;

export default Questions;
