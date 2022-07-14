import React from 'react';
import LightModeIcon from './styles'
import { MdLightMode } from 'react-icons/md'

interface IProps {
  switchTheme: () => void
}

const LightMode: React.FC<IProps> = ({ switchTheme }) => {
  return (
    <LightModeIcon>
      <button onClick={() => switchTheme()}>
        <MdLightMode className='icon' />
      </button>
    </LightModeIcon>
  )
}

export default LightMode;