import React from 'react';
import styled from 'styled-components'

const InputField = styled.input`
  width: 18.75rem;
  height: 2.875rem;
  background-color: #1B2531;
  border: 0.0625rem solid #384459;
  border-radius: 0.3125rem;
`

const DateField: React.FC = () => {
  return (
    <InputField type="search" />
  )
}

export default DateField;