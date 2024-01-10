import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.module.css'
import ContactoDeAyuda from './component/contactoDeAyuda/contactoDeAyuda.tsx'

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<ContactoDeAyuda/>} />
          {/*<Route path="/respuestaConsulta" element:{<respuestaConsulta/>} />*/}
        </Routes>
        <ToastContainer/>
      </>
    </Router>
  )
}

export default App
