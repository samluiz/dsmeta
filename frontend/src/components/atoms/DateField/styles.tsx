import styled from 'styled-components';

const InputField = styled.div`
    .inputField {
        width: 18.75rem;
        height: 2.875rem;
        background-color: ${({ theme }) => theme.input};
        border: 0.0625rem solid #384459;
        border-radius: 0.3125rem;
        padding: 0.625rem;
        color: #545454;
        margin-bottom: 1rem;
    }
`;

export default InputField;
