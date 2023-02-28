import { MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import styled from 'styled-components';

import NameCard from './NameCard';
import NAMES from '../../utils/name';

const Board = () => {
  const navigator = useNavigate();

  const handleMoveDetail = (e: MouseEvent) => {
    const target = e.target as HTMLLIElement;
    navigator(`/board/${target.textContent}`);
  };

  return (
    <Main>
      <Link to='/'>
        <AiFillHome className='back' size='1.5rem' />
      </Link>
      <div className='contentContainer'>
        <h1>누구의 롤링페이퍼를 볼까? 🤔</h1>
        <div className='cardContainer'>
          <ul className='alignContainer'>
            {NAMES.map((name) => {
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
  align-items: center;
  margin: 100px auto;
  padding: 20px;

  @media screen and (max-width: 930px) {
    width: 90%;
    height: 90vh;
    padding: 2rem;
    margin: 0 auto;
  }

  .back {
    position: absolute;
    left: 1%;
    top: 0;
    color: #aaa;
    cursor: pointer;

    @media screen and (max-width: 414px) {
      top: 3%;
    }

    &:hover {
      color: #555;
    }

    &:active {
      color: ${({ theme }) => theme.activeColor};
    }
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
  }
`;
