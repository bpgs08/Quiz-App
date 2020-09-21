import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { space, media, colors } from "../../utils/theme";
import StandardButton from "../../components/StandardButton";
import { resetGame } from "../../actions/addQuestionsAction";
import Headings from "../../components/Headings";

let Results = ({ questions, history, resetGame }) => {
  useEffect(() => {
    if (!questions) {
      history.push("/");
    }
  }, [questions, history]);
  let finalScore = 0;
  const results = questions?.map((el) => {
    if (el.isCorrect) finalScore++;
    return (
      <Question
        key={el.question}
        correct={el.isCorrect}
        dangerouslySetInnerHTML={{ __html: el.question }}
      />
    );
  });

  const resetGameHandler = () => {
    resetGame();
    history.push("/");
  };

  return (
    <ResultsContainer>
      <StyledHeading type={5} bold={true} align="center">
        You Scored <div>{finalScore} / 10</div>
      </StyledHeading>
      <div>{results}</div>
      <StandardButton center onClick={resetGameHandler}>
        Play Again?
      </StandardButton>
    </ResultsContainer>
  );
};

const ResultsContainer = styled.ul`
  margin: ${space[0]} auto;
  padding: ${space[0]} ${space[3]};
  max-width: 300px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ${media.tablet`
    margin: ${space[0]} auto;
    max-width: 400px;
  `}
`;

const StyledHeading = styled(Headings)`
  margin: ${space[3]} auto ${space[3]} auto;
  max-width: 180px;
  ${media.tablet`
    max-width: 225px;
  `}
`;

const Question = styled.li`
  ${(props) =>
    props.correct
      ? `color: ${colors.forestgreen}`
      : `color: ${colors.darkgrey}`};
  margin-bottom: ${space[3]};
  text-align: center;
`;

const mapDispatchToProps = {
  resetGame,
};

const mapStateToProps = ({ addQuestionsReducer }) => {
  return {
    questions: addQuestionsReducer.questions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
