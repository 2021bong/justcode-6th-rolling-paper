import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { AiFillHome } from 'react-icons/ai';

import { names } from '../../utils/name';
import { randomColors } from '../../utils/color';
import { RandomBtn, Main } from './Write.style';

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
