import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'IM_Hyemin-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/IM_Hyemin-Bold.woff2') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cafe24Ssurround';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
  box-sizing: border-box;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 700;
  }

  ul, ol, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  button {
    cursor: pointer;
  }
  
  b {
    font-weight: 700;
  }
  
  input,
  textarea {
    outline: none;
  }
  
  body{
    -ms-overflow-style: none;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
