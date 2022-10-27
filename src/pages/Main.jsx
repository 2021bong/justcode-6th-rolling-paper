import styled from 'styled-components';
import { randomColorsLeft, randomColorsRight } from '../utils/color';

const Main = () => {
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
        <RandomBtn
          randomColor={randomColorsLeft[Math.floor(Math.random() * 3)]}
        >
          롤링페이서 쓰러가기
        </RandomBtn>
        <RandomBtn
          randomColor={randomColorsRight[Math.floor(Math.random() * 3)]}
        >
          롤링페이퍼 구경가기
        </RandomBtn>
      </div>
    </MainContainer>
  );
};

export default Main;

const RandomBtn = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${({ randomColor }) => randomColor};
  cursor: pointer;
  font-weight: 700;
  font-family: ${({ theme }) => theme.contentFont};

  &:first-child {
    margin-right: 20px;
  }

  &:hover {
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3);
    background-color: #333;
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
  background: 25% 50%/130% no-repeat
    url('https://cdn.pixabay.com/photo/2016/02/19/10/59/art-1209519_1280.jpg');
  font-family: ${({ theme }) => theme.titleFont};

  h1 {
    font-size: 33px;
    line-height: 38px;
    text-align: center;
    margin-bottom: 50px;
  }

  .btnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
