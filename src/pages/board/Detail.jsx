import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { randomColors } from '../../utils/color';
import { BsBackspaceFill } from 'react-icons/bs';

const Detail = () => {
  const params = useParams().name;
  const [list, setList] = useState();

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
      const docRef = doc(db, 'rolling-paper', params);
      const letters = await getDoc(docRef);
      if (letters._document.data.value.mapValue.fields !== undefined) {
        let dataList = Object.entries(
          letters._document.data.value.mapValue.fields
        );
        dataList = dataList.map((message) => {
          return message.map((el, i) => {
            return i === 1 ? el.stringValue : el;
          });
        });
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

const MessageCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: auto;
  min-width: 15rem;
  min-height: 15rem;
  margin: 0 20px 20px 0;
  padding: 30px;
  border-radius: 10px;
  background-color: ${({ randomColor }) => randomColor};
  position: relative;
  overflow: hidden;
  color: #fff;

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

  &:nth-child(3n) {
    margin: 0 0 20px 0;

    @media screen and (min-width: 930px) and (max-width: 1240px) {
      margin: 0 20px 20px 0;
    }

    @media screen and (min-width: 414px) and (max-width: 930px) {
      margin: 0 20px 20px 0;
    }
  }

  .writer {
    font-weight: 700;
    display: block;
    margin-top: 20px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70%;
  margin: 200px auto;
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
