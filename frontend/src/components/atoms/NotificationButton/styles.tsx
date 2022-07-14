import styled from 'styled-components';

const IconButton = styled.button`
    width: 2.8125rem;
    height: 2.8125rem;
    background-color: rgba(255, 107, 114, 0.1);
    border: 0.0625rem solid rgba(255, 107, 114, 1);
    border-radius: 0.625rem;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover {
        background-color: rgba(94, 0, 5, 0.401);
    }
`;

export default IconButton;
