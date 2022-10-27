import styled from 'styled-components';
import { randomColors } from '../../utils/color';

const NameCard = ({ name, handleMoveDetail }) => {
  return (
    <Main
      randomColor={
        randomColors[Math.floor(Math.random() * randomColors.length)]
      }
      onClick={handleMoveDetail}
    >
      {name}
    </Main>
  );
};

export default NameCard;

const Main = styled.li`
  width: 31%;
  height: auto;
  margin: 10px 10px 0 0;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ randomColor }) => randomColor};
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-family: ${({ theme }) => theme.contentFont};

  &:hover {
    box-shadow: ${({ theme }) => theme.btnShadow};
  }

  &:active {
    background-color: ${({ theme }) => theme.activeColor};
  }

  @media screen and (max-width: 390px) {
    width: 45%;
    height: auto;
    padding: 2rem;
  }

  &:nth-child(3n) {
    margin: 10px 0 0 0;

    @media screen and (max-width: 390px) {
      margin: 10px 10px 0 0;
    }
  }
`;
