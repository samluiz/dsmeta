import React from 'react';
import styled from 'styled-components';
import SalesContainer from '../SalesContainer';

const Main = styled.main`
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #102347 0%, #181818 100%);
`

const MainContainer: React.FC = () => {
  return (
    <>
    <Main>
      <SalesContainer />
    </Main>
    </>
  )
}

export default MainContainer;