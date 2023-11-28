import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body, button, input {
    font-family: ${({ theme }) => theme.FONT_FAMILY.MAIN_TEXT};
    font-size: ${({ theme }) => theme.FONT_SIZE.REGULAR};
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.LIGH_100};
  }

  body {
    background: ${({ theme }) => theme.COLORS.DARK_400};
  }

  button:hover {
    transition: .5s;
    filter: brightness(0.9);
  }

`;