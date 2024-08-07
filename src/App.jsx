import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import First from './pages/First/First'
import './scss/main.scss'
import Header from './components/Header/Header'
import Main from './pages/Main/Main.'

function App() {


  return (
    <>
        <Header/>
        <Main/>
    </>
  )
}

export default App
