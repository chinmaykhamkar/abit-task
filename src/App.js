import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroImg from './components/HeroImg/HeroImg'
const App = () => {
  return (
    <div className='main-app'>
      <Navbar />
      <HeroImg />
      
    </div>
  )
}

export default App