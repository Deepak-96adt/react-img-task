import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowData from './Components/ShowData'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/showdata' element={<ShowData />}></Route>
      </Routes>
    </>
  )
}

export default App