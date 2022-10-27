import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme';
import Board from './pages/board/Board';
import Write from './pages/write/Write';
import Detail from './pages/board/Detail';

const Router = () => {
  return (
    <HashRouter basename='/justcode-6th-rolling-paper'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/write' element={<Write />} />
          <Route path='/board' element={<Board />} />
          <Route path='/board/:name' element={<Detail />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
};

export default Router;
