import React from 'react';
import DarkModeIcon from './styles';
import { MdDarkMode } from 'react-icons/md'

interface IProps {
  switchTheme: () => void
}

const DarkMode: React.FC<IProps> = ({ switchTheme }) => {
  return (
    <DarkModeIcon>
      <button onClick={() => switchTheme()}>
        <MdDarkMode className='icon'/>
      </button>
    </DarkModeIcon>
  )
}

export default DarkMode;