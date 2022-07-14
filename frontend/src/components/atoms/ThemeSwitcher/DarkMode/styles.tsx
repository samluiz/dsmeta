import styled, { ThemeConsumer } from "styled-components";


const DarkModeIcon = styled.div`
  position: fixed;
  width: 90%;
  overflow: hidden;
  top: 2rem;
  left: 0;

  button {
    padding: 0.8rem;
    border-radius: 100%;
    background: ${({theme}) => theme.bgcolor};
    border: none;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    transition-duration: 0.2s;
    &:hover {
      background: black;
      .icon {
        filter: invert(100%);
      }
    }
  }

  .icon {
    width: 30px;
    height: 30px;
  }
`

export default DarkModeIcon;