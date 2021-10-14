import React from 'react'
import { Header } from './components/header'
import { GlobalStyles } from './Global'
import { Main } from './components/main'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
    </>
  )
}

export default App
