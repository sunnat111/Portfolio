import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './scss/main.scss'
import Header from './components/Header/Header'
import Main from './pages/Main/Main.'
import About from './pages/About/About'

function App() {


  return (
    <>
        <Header/>
        <Main/>
        <About/>
    </>
  )
}

export default App
