import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = (props) => {
  useEffect(() => {}, []);
  const params = useParams().name;

  return <Main>detail {params}</Main>;
};

export default Detail;

const Main = styled.div``;
