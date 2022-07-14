import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo.svg'

const MyHeader = styled.div`
  height: 13.75rem;
  background: linear-gradient(180deg, #181818 0%, #102347 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 14.6875rem;
    height: 6.625rem;
    margin-bottom: 0.875rem;
  }

  p {
    font-weight: 300;
    font-size: 0.75rem;
  }
`

const Header: React.FC = () => {
  return (
    <>
      <MyHeader>
        <img src={logo} alt="Logo" />
        <h2>DSMeta</h2>
        <p>Desenvolvido por @7samuca7 & @devsuperior</p>
      </MyHeader>
    </>
  )
}

export default Header;