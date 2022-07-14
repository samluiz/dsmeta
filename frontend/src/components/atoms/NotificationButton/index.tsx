import React from 'react';
import IconButton from './styles';
import icon from '../../../assets/img/notification-icon.svg';

const NotificationButton: React.FC = () => {
    return (
        <IconButton>
            <img src={icon} alt="ícone" />
        </IconButton>
    );
};

export default NotificationButton;
