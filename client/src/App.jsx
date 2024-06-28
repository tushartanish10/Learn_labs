import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Projects from './pages/Projects'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes >
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/dashboard' element = {<Dashboard />} />
      <Route path='/signup' element = {<SignUp />} />
      <Route path='/signin' element = {<SignIn />} />
      <Route path='/projects' element = {<Projects />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App