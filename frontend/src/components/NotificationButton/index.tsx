import React from 'react';
import styled from 'styled-components'
import icon from '../../assets/img/notification-icon.svg'

const IconButton = styled.div`
  width: 2.8125rem;
  height: 2.8125rem;
  background-color: rgba(255, 107, 114, 0.1);
  border: 0.0625rem solid rgba(255, 107, 114, 1);
  border-radius: 0.625rem;
  display: grid;
  place-items: center;
`

const NotificationButton: React.FC = () => {
  return (
    <IconButton>
      <img src={icon} alt="ícone" />
    </IconButton>
  )
}

export default NotificationButton;