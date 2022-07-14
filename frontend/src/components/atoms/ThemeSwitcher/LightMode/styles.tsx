import styled from "styled-components";

const LightModeIcon = styled.div`
  position: fixed;
  top: 2rem;
  left: 0;

  button {
    padding: 0.8rem;
    border-radius: 100%;
    background: ${({theme}) => theme.bgcolor};
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    transition-duration: 0.2s;
    &:hover {
      background: white;
      .icon {
        filter: none;
      }
    }
  }

  .icon {
    filter: invert(100%);
    width: 30px;
    height: 30px;
  }
`

export default LightModeIcon