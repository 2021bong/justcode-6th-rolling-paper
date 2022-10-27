import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme';

const Router = () => {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
};

export default Router;
