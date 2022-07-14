import styled from "styled-components";

const LightModeIcon = styled.div`
  position: absolute;
  align-self: baseline;
  margin-left: 4rem;

  button {
    padding: 0.8rem;
    border-radius: 100%;
    background: ${({theme}) => theme.bgcolor};
    border: none;
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