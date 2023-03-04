import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme';

import Home from './Home';
import Board from './pages/board/Board';
import Write from './pages/write/Write';
import Detail from './pages/board/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/write' element={<Write />} />
          <Route path='/board' element={<Board />} />
          <Route path='/board/:name' element={<Detail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
