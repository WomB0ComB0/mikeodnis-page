/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, NotFound } from './pages/index'

function App() {
  
  return (
    <>
      <Routes>
        <Route path={`/mikeodnis`} element={<Home />} />
        <Route path={`/*`} element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
