import React from 'react'
import Routes from './router'
import GlobalStyles from './styles/global'
import {ThemeProvider} from 'styled-components' 
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles/>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
