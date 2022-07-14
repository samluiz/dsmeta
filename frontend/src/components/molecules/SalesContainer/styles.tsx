import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({theme}) => theme.bgcolor};
  width: 100vw;
  height: 100vh;
  margin: 3.75rem;
  border: ${({theme}) => theme.border};
  border-radius: 10px;
  -webkit-box-shadow: 4px 6px 41px -12px rgba(0,0,0,0.68);
  -moz-box-shadow: 4px 6px 41px -12px rgba(0,0,0,0.68);
  box-shadow: 4px 6px 41px -12px rgba(0,0,0,0.68);
  
`

export default Container