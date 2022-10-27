import styled from 'styled-components';
import { names } from '../../utils/name';
import NameCard from './NameCard';
import { useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Board = () => {
  const navigator = useNavigate();

  const handleMoveDetail = (e) => {
    navigator(`/board/${e.target.textContent}`);
  };

  return (
    <Main>
      <Link to='/'>
        <AiFillHome className='back' size='1.5rem' />
      </Link>
      <h1>누구의 롤링페이퍼를 볼까? 🤔</h1>
      <div className='cardContainer'>
        <ul className='alignContainer'>
          {names.map((name) => {
            return (
              <NameCard
                className='card'
                key={name}
                name={name}
                handleMoveDetail={handleMoveDetail}
              />
            );
          })}
        </ul>
      </div>
    </Main>
  );
};

export default Board;

const Main = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;

  .back {
    position: absolute;
    left: 1%;
    top: 0;
    color: #aaa;
    cursor: pointer;
    &:hover {
      color: #555;
    }

    &:active {
      color: ${({ theme }) => theme.activeColor};
    }
  }

  h1 {
    font-family: ${({ theme }) => theme.titleFont};
    font-size: 2rem;
  }

  .cardContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .alignContainer {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
