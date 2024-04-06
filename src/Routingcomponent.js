import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import ProtectRoute from './components/ProtectRoute'

const Routingcomponent = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/accounts' 
        element={
          <ProtectRoute>
           <Account/>
          </ProtectRoute>}/>
        
    </Routes>
    
    </>
  )
}

export default Routingcomponent