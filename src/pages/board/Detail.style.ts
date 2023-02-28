import styled from 'styled-components';

export const MessageCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 0;
  width: 16rem;
  min-width: 15rem;
  min-height: 15rem;
  margin: 0 20px 20px 0;
  padding: 30px;
  border-radius: 10px;
  background-color: ${({ randomColor }: { randomColor: string }) =>
    randomColor};
  position: relative;
  overflow: hidden;
  color: #fff;
  font-family: ${({ theme }) => theme.contentFont};
  line-height: 1.4rem;

  @media screen and (min-width: 414px) and (max-width: 930px) {
    margin: 0 20px 20px 0;
  }

  @media screen and (max-width: 414px) {
    margin: 0 0 20px 0;
  }

  &:before {
    position: absolute;
    content: '';
    width: inherit;
    height: inherit;
    top: 0;
    left: 0;
    opacity: 0.2;
    background-image: url('https://kmug.co.kr/data/file/design/data_image_301181594_11135ff1c7_o_ybde.jpg');
  }

  .writer {
    font-weight: 700;
    display: block;
    margin-top: 20px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70%;
  margin: 100px auto;
  padding: 30px;

  @media screen and (min-width: 414px) and (max-width: 930px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin: 50px auto;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .back {
    position: absolute;
    left: 3%;
    top: 0;
    color: #aaa;
    cursor: pointer;

    @media screen and (max-width: 414px) {
      top: 1%;
      left: 1%;
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
      line-height: 2.2rem;
      margin-bottom: 20px;

      @media screen and (max-width: 414px) {
        font-size: 1.5rem;
      }
    }

    .messageContainer {
      width: 100%;
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
    }

    .noCard {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      min-width: 15rem;
      min-height: 15rem;
      background-color: #eee;
      line-height: 1.2rem;
      text-align: center;
      font-family: ${({ theme }) => theme.contentFont};
    }
  }
`;
