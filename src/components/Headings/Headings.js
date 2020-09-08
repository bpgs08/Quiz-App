import React from "react";
import styled, { css } from "styled-components";
import { media } from "../../utils/theme";

const Headings = ({ children, type = 1, ...props }) => {
  switch (type) {
    case 6:
      return (
        <H6Element data-js-type-6 {...props}>
          {children}
        </H6Element>
      );
    case 5:
      return (
        <H5Element data-js-type-5 {...props}>
          {children}
        </H5Element>
      );
    case 4:
      return (
        <H4Element data-js-type-4 {...props}>
          {children}
        </H4Element>
      );
    case 3:
      return (
        <H3Element data-js-type-3 {...props}>
          {children}
        </H3Element>
      );
    case 2:
      return (
        <H2Element data-js-type-2 {...props}>
          {children}
        </H2Element>
      );
    case 1:
    default:
      return (
        <H1Element data-js-type-1 {...props}>
          {children}
        </H1Element>
      );
  }
};

export const H1 = css`
  font-size: 44px;
  font-weight: 300;
  ${media.tablet`
    font-size: 50px;
  `}
  ${media.desktop`
    font-size: 56px;
  `}
`;

export const H2 = css`
  font-size: 30px;
  font-weight: 300;
  ${media.tablet`
    font-size: 40px;
  `}
  ${media.desktop`
    font-size: 42px;
  `}
`;

export const H3 = css`
  font-size: 28px;
  font-weight: 300;
  ${media.tablet`
    font-size: 32px;
  `}
  ${media.desktop`
    font-size: 36px;
  `}
`;

export const H4 = css`
  font-size: 26px;
  font-weight: 300;
  ${media.tablet`
    font-size: 28px;
  `}
  ${media.desktop`
    font-size: 32px;
  `}
`;

export const H5 = css`
  font-size: 22px;
  font-weight: 300;
  ${media.tablet`
    font-size: 24px;
  `}
  ${media.desktop`
    font-size: 28px;
  `}
`;

export const H6 = css`
  font-size: 20px;
  font-weight: 300;
  ${media.tablet`
    font-size: 22px;
  `}
  ${media.desktop`
    font-size: 24px;
  `}
`;

export const Styles = css`
  ${(props) => props.bold && `font-weight: 600;`};
  ${(props) => props.align === "center" && `text-align: center;`};
`;

const H1Element = styled.h1`
  ${H1}
  ${Styles}
`;
const H2Element = styled.h2`
  ${H2}
  ${Styles}
`;
const H3Element = styled.h3`
  ${H3}
  ${Styles}
`;
const H4Element = styled.h4`
  ${H4}
  ${Styles}
`;
const H5Element = styled.h5`
  ${H5}
  ${Styles}
`;
const H6Element = styled.h6`
  ${H6}
  ${Styles}
`;

export default Headings;
