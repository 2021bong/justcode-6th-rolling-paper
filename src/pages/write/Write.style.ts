import styled from 'styled-components';

export const RandomBtn = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${({ randomColor }: { randomColor: string }) =>
    randomColor};
  cursor: pointer;
  font-weight: 700;
  font-family: ${({ theme }) => theme.contentFont};

  &:first-child {
    margin-right: 20px;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.btnShadow};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.btnShadow};

    background-color: ${({ theme }) => theme.activeColor};
  }
`;

export const Main = styled.div`
  position: relative;
  width: 50%;
  height: 60%;
  margin: 100px auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: url('https://img.freepik.com/free-photo/white-crumpled-paper-background-simple-diy-craft_53876-128183.jpg?w=1380&t=st=1667143321~exp=1667143921~hmac=da8f86406a3e9c54696e02d2f63e2e57d276a6d5c9017f6ca9d3a86ea3da0762');
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.containerShadow};

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    padding: 1rem;
    margin: 0 auto;

    .desc {
      width: 75%;
      text-align: center;
      line-height: 1rem;
    }
  }

  @media screen and (max-height: 600px) {
    margin: 50px auto;
  }

  .back {
    z-index: 1;
    position: absolute;
    left: 3%;
    top: 3%;
    color: #aaa;
    cursor: pointer;
    &:hover {
      color: #555;
    }

    &:active {
      color: ${({ theme }) => theme.activeColor};
    }
  }

  .formContainer {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      font-size: 1rem;
      font-weight: 700;
      font-family: ${({ theme }) => theme.titleFont};
    }

    textarea {
      width: 100%;
      height: 80%;
      resize: none;
      border: none;
      padding: 20px;
      border-radius: 10px;
      font-family: ${({ theme }) => theme.contentFont};
    }

    select {
      outline: none;
      border: none;
      padding: 5px;
      border-radius: 5px;
      font-family: ${({ theme }) => theme.contentFont};
    }

    input {
      border: none;
      padding: 5px 5px;
      border-radius: 5px;
      font-family: ${({ theme }) => theme.contentFont};
      outline: none;
    }

    .inputContainer {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .desc {
      margin: 0 0 5px 0;
      font-size: 0.8rem;
      color: #999;
      font-family: ${({ theme }) => theme.contentFont};
    }

    .textareaContainer {
      width: 70%;

      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 10px;
      }
    }
  }
`;
