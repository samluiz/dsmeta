import styled, { ThemeConsumer } from "styled-components";


const DarkModeIcon = styled.div`
  position: absolute;
  align-self: baseline;
  margin-left: 4rem;

  button {
    padding: 0.8rem;
    border-radius: 100%;
    background: ${({theme}) => theme.background};
    border: ${({theme}) => theme.border};
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