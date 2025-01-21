import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import PasteList from './Components/PasteList';
import ViewPaste from './Components/ViewPaste';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/paste" element = {<PasteList/>} />
        <Route path="/paste/:id" element = {<ViewPaste/>} />
      </Routes>
    </Router>
  )
}

export default App
