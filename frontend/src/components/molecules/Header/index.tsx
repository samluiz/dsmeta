import React from 'react';
import MyHeader from './styles'
import logo from '../../../assets/img/logo.svg'
import DarkMode from '../../atoms/ThemeSwitcher/DarkMode';
import LightMode from '../../atoms/ThemeSwitcher/LightMode';

interface IProps {
  isDarkTheme: boolean,
  switchTheme: () => void
}

const Header: React.FC<IProps> = ({ isDarkTheme, switchTheme }) => {
  return (
    <>
      <MyHeader>
        {isDarkTheme ? <LightMode switchTheme={switchTheme} /> : <DarkMode switchTheme={switchTheme} />}
        <img src={logo} alt="Logo" />
        <h2>DSMeta</h2>
        <p>Desenvolvido por @7samuca7 & @devsuperior</p>
      </MyHeader>
    </>
  )
}

export default Header;