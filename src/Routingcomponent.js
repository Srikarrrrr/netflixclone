import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const Routingcomponent = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}>
            
        </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default Routingcomponent