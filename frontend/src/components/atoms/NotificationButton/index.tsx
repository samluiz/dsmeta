import React from 'react';
import styled from 'styled-components'
import icon from '../../../assets/img/notification-icon.svg'

const IconButton = styled.div`
  width: 45px;
  height: 45px;
  background-color: rgba(255, 107, 114, 0.1);
  border: 1px solid rgba(255, 107, 114, 1);
  border-radius: 10px;
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