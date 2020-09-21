import { css } from "styled-components";

export const sizes = {
  reallySmall: ["max", 380],
  phoneLandscape: ["min", 576],
  tablet: ["min", 768],
  desktop: ["min", 992],
  large: ["min", 1200],
  larger: ["min", 1440],
  fullscreen: ["min", 1600],
  fullHd: ["min", 1920],
  ultrawide: ["min", 2560],
};

export const space = [
  "0px",
  "5px",
  "10px",
  "15px",
  "20px",
  "25px",
  "30px",
  "35px",
  "45px",
  "50px",
  "55px",
  "60px",
  "65px",
];

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (${sizes[label][0]}-width: ${sizes[label][1]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const theme = {
  colors: {
    black: "#000",
    grey: "#e0dfe0",
    forestgreen: "#228B22",
    darkgrey: "#808080",
  },
};

export const colors = theme.colors;
export default theme;
