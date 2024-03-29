import styled from 'styled-components';
import { randomColorsLeft, randomColorsRight } from './utils/color';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <MainContainer>
      <h1>
        😀
        <br />
        JUSTCODE 6기
        <br />
        롤링페이퍼
      </h1>
      <div className='btnContainer'>
        <Link to='/write' className='firstBtn'>
          <RandomBtn
            randomColor={
              randomColorsLeft[
                Math.floor(Math.random() * randomColorsLeft.length)
              ]
            }
          >
            롤링페이퍼 쓰러가기
          </RandomBtn>
        </Link>
        <Link to='/board'>
          <RandomBtn
            randomColor={
              randomColorsRight[
                Math.floor(Math.random() * randomColorsRight.length)
              ]
            }
          >
            롤링페이퍼 구경가기
          </RandomBtn>
        </Link>
      </div>
    </MainContainer>
  );
};

export default Home;

const RandomBtn = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${({ randomColor }: { randomColor: string }) =>
    randomColor};
  cursor: pointer;
  font-weight: 700;
  font-family: ${({ theme }) => theme.contentFont};

  &:hover {
    box-shadow: ${({ theme }) => theme.btnShadow};
  }

  &:active {
    box-shadow: ${({ theme }) => theme.btnShadow};
    background-color: ${({ theme }) => theme.activeColor};
  }
`;

const MainContainer = styled.div`
  width: 50%;
  height: 400px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: center/105% no-repeat
    url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fnw9OU%2FbtrPK1178su%2FUtteCLsoo44E4fUAHOCUsk%2Fimg.jpg');
  font-family: ${({ theme }) => theme.titleFont};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.containerShadow};

  @media screen and (max-width: 670px) {
    width: 100%;
    height: 100vh;
    padding: 1rem;
    margin: 0;
  }

  h1 {
    font-size: 2rem;
    line-height: 38px;
    text-align: center;
    margin-bottom: 50px;
  }

  .btnContainer {
    display: flex;
    justify-content: center;
    align-items: center;

    .firstBtn {
      margin-right: 20px;
    }
  }
`;
