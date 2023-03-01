import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { BsBackspaceFill } from 'react-icons/bs';

import { randomColors } from '../../utils/color';
import { MessageCard, Main } from './Detail.style';

const Detail = () => {
  const params = useParams().name;
  const [list, setList] = useState<[string, any][] | [] | undefined>();

  useEffect(() => {
    const loadData = async () => {
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
      const docRef = doc(db, 'rolling-paper', !!params ? params : '홍길동');
      const letters = await getDoc(docRef);
      if (letters.exists()) {
        let dataList: [string, any][] = Object.entries(letters.data());
        setList(dataList);
      } else {
        setList([]);
      }
    };
    loadData();
  }, []);

  return (
    <Main>
      <Link to='/board'>
        <BsBackspaceFill size='1.5rem' className='back' />
      </Link>
      <div className='contentContainer'>
        <h1>{params}의 롤링페이퍼 ✉️</h1>
        {list &&
          (list.length !== 0 ? (
            <ul className='messageContainer'>
              {list.map((message) => {
                return (
                  <MessageCard
                    randomColor={
                      randomColors[
                        Math.floor(Math.random() * randomColors.length)
                      ]
                    }
                    key={message[0]}
                  >
                    <span className='message'>{message[1]}</span>
                    <span className='writer'>- {message[0]} -</span>
                  </MessageCard>
                );
              })}
            </ul>
          ) : (
            <p className='noCard'>
              아직
              <br />
              작성된 롤링페이퍼가
              <br />
              없어요 🥲
            </p>
          ))}
      </div>
    </Main>
  );
};

export default Detail;
