import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Signin from './pages/Signin'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home /> }/>
      <Route path='/about' element= {<About /> }/>
      <Route path='/signin' element= {<Signin />}/>
      <Route path='/signout' element= {<SignUp />}/>
      <Route path='/Dashboard' element= {<Dashboard />}/>
      <Route path='/projects' element= {<Projects />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App