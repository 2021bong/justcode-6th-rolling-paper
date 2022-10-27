import styled from 'styled-components';
import { names } from '../../utils/name';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { randomColors } from '../../utils/color';
import { AiFillHome } from 'react-icons/ai';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const Write = () => {
  const [myName, setMyname] = useState('');
  const [who, setWho] = useState('구현');
  const [letterValue, setLetterValue] = useState('');
  const [color] = useState(
    randomColors[Math.floor(Math.random() * randomColors.length)]
  );

  const navigator = useNavigate();

  const handleWhoToLetter = (e) => {
    setWho(e.target.value);
  };

  const handleMyName = (e) => {
    setMyname(e.target.value);
  };

  const handleWrite = (e) => {
    setLetterValue(e.target.value);
  };

  const writeData = async () => {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const data = { [myName]: letterValue };
    const nameRef = doc(db, 'rolling-paper', who);
    setDoc(nameRef, data, { merge: true });
  };

  const handleLetterSubmit = () => {
    if (myName && who && letterValue) {
      writeData();
      navigator('/');
    } else {
      alert('모든 항목을 입력해주세요!');
    }
  };

  return (
    <Main>
      <Link to='/'>
        <AiFillHome className='back' size='1.5rem' />
      </Link>
      <form className='formContainer' onSubmit={(e) => e.preventDefault()}>
        <div className='inputContainer'>
          <label htmlFor='who'>롤링페이퍼 받을 사람은 </label>
          <select name='who' id='who' onChange={handleWhoToLetter}>
            {names.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className='inputContainer'>
          <label htmlFor='myName'>내 이름은 </label>
          <input
            type='text'
            id='myName'
            onChange={handleMyName}
            value={myName}
          />
        </div>
        <div className='textareaContainer inputContainer'>
          <label htmlFor='letter'>하고 싶은 말</label>
          <textarea
            name='letter'
            id='letter'
            rows={10}
            value={letterValue}
            onChange={handleWrite}
          />
        </div>
        <p className='desc'>
          * 같은 이름으로 또 작성하시면 새로운 메세지로 덮어씌워집니다 🥲
        </p>
        <RandomBtn randomColor={color} onClick={handleLetterSubmit}>
          작성하기
        </RandomBtn>
      </form>
    </Main>
  );
};

export default Write;

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
    box-shadow: ${({ theme }) => theme.btnShadow};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.btnShadow};

    background-color: ${({ theme }) => theme.activeColor};
  }
`;

const Main = styled.div`
  position: relative;
  width: 50%;
  height: 60%;
  margin: 100px auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-image: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkXXSj%2FbtrPI6pYN7V%2FtvBCf7Y0FvKN1eqe4Ua700%2Fimg.png');
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.containerShadow};

  .back {
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
    z-index: 1;
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
    }

    input,
    option {
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
