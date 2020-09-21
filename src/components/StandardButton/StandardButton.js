import React from "react";
import styled from "styled-components";
import { space, colors } from "../../utils/theme";

const StandardButton = ({ ...props }) => {
  return <Button {...props}>{props.children}</Button>;
};

const Button = styled.button`
  cursor: pointer;
  color: black;
  padding: ${space[2]};
  border: 1px solid ${colors.black};
  border-radius: ${space[2]};
  width: 100px;
  ${(props) => props.center && `margin: 0 auto`};
`;

export default StandardButton;
