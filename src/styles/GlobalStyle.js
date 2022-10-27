import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'KOTRA_BOLD-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  * {
  box-sizing: border-box;
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
