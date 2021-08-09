import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {

    --background: #abd1c6;

    --headline: #001e1d;

    --paragraph: #0f3433;

    --link: #f9bc60;

    --card-background: #004643;

    --card-headline: #fffffe;

    --card-paragraph: #e8e4e6;

    --form-input: #004643;

    --label-placeholder: #fffffe;

    --form-button: #f9bc60;

    --form-button-text: #001e1d;

    --terciary: #e16162;
  }

  html {

    @media ( max-width : 1080px ) {
      font-size: 93.75%;
    }

    @media ( max-width : 720px ) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);

    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Poppins , sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [ disabled ] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export default GlobalStyle;
