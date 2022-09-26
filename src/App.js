import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle.js'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/index.js'

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
    </Router>
  )
}