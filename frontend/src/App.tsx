import React, { useState } from "react"
import GlobalStyle from "./assets/styles/globalStyles"
import Header from "./components/molecules/Header"
import MainContainer from "./components/organisms/MainContainer"
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './assets/styles/themes'
import DarkMode from "./components/atoms/ThemeSwitcher/DarkMode"


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function switchTheme() {
    if (isDarkTheme === false) {
      setIsDarkTheme(true)
    }
    else {
      setIsDarkTheme(false)
    }
  }

  return (
    <>
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header isDarkTheme={isDarkTheme} switchTheme={switchTheme} />
      <MainContainer />
    </ThemeProvider>
      
      
    
    
    </>
    
  )
}

export default App
