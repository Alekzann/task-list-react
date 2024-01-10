import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  };

  *,
  ::after, ::before {
    box-sizing: inherit;
  };

  body {
    background-color: #eee;
    font-family: 'Noto Sans Nag Mundari', sans-serif;
    word-break: break-word;
  };
`;

export const theme = {
  colors: {
    primaryColor: "rgba(255, 255, 255, 0.742)",
    secondaryColor: "hsl(180, 100%, 25%)",
  },
  borderRadius: {
    borderRadius: 3,
  },
};
