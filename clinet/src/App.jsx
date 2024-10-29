// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandPage from './components/LandPage'
import Product from './pages/Product'
import Aside from './components/Aside/Aside'
import MainContainer from './components/MainContainer/MainContainer'
import Single from './pages/Single'

function App() {

  return(
    <div className="LandPage">
      <Aside/>
      <div className="LandPage-right">
    <MainContainer/>
    <div className="LandPage-right-center">Products</div>
    <div className='LandPage-right-bottom-main'>
    <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path='/single/product/:id' element={<Single/>}/>
    </Routes>
    </div>
      </div>
    
    </div>
    )
}

export default App
