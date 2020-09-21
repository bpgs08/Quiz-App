import React from "react";
import styled from "styled-components";
import { space, media } from "../../utils/theme";
import Headings from "../../components/Headings";
import StandardButton from "../StandardButton";
import Loading from "../Loading";

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
            <StandardButton value="True" onClick={submitAnswer}>
              TRUE
            </StandardButton>
            <StandardButton value="False" onClick={submitAnswer}>
              FALSE
            </StandardButton>
          </ButtonContainer>
        </>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </QuizContainer>
  );
};

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
  padding: ${space[5]};
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
  margin: ${space[0]} auto;
  padding: ${space[0]} ${space[3]};
  max-width: 300px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  ${media.tablet`
    margin: ${space[0]} auto;
    max-width: 400px;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: ${space[8]};
  margin-top: auto;
  justify-content: space-between;
`;

export default Questions;
