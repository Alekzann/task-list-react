import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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

export default GlobalStyle;