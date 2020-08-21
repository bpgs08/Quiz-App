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
    black1: "#111",
    black2: "#222",
    blue: "#2980b9",

    green: "#16a085",
    green1: "#00CA4E",
    grey: "#aaa",

    orange: "#FFBD44",

    red: "#FF605C",

    white: "#FFF",
    white1: "#eee",

    yellow: "#f1c410",
  },
};

export const colors = theme.colors;
export default theme;
