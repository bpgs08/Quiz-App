import React from "react";
import styled from "styled-components";
import Headings from "../../components/Headings";
import { space, media } from "../../utils/theme";
import { Link } from "react-router-dom";

let Home = () => {
  return (
    <HomeContainer>
      <StyledHeading type={5} bold={true} align="center">
        Welcome to the Trivia Challenge!
      </StyledHeading>
      <Paragraph>
        You will be presented with 10 True or False questions.
      </Paragraph>
      <Paragraph>Can you score 100%</Paragraph>

      <BeginButton to={`/quiz`}>BEGIN</BeginButton>
    </HomeContainer>
  );
};

const StyledHeading = styled(Headings)`
  margin: ${space[3]} auto 0 auto;
  max-width: 180px;
  ${media.tablet`
    max-width: 225px;
  `}
`;

const HomeContainer = styled.div`
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

const Paragraph = styled.p`
  margin: auto auto 0 auto;
  max-width: 180px;
  text-align: center;
`;

const BeginButton = styled(Link)`
  margin: auto auto ${space[5]} auto;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: black;
`;

export default Home;
