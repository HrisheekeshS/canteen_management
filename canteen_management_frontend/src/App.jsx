import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './components/login'
import First from './components/first'
import CustomerMenu from './components/CustomerMenu'
import About from './components/about'
import Contact from './components/Contact'
import StudentMenu from './components/StudentMenu'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/CustomerMenu" element={<CustomerMenu/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/studentMenu" element={<StudentMenu/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
