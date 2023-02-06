import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Homepage from './Homepage'

const Allroute = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/admin" element={<Admin/>}/>
    </Routes>
  )
}

export default Allroute