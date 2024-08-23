import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import CreatePost from './pages/CreatePost'
import SignUp from './pages/Signup'
import SignIn from './pages/Signin'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'


const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes >
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route element={<PrivateRoute />}>
        <Route path='/createpost' element = {<CreatePost />} />
      </Route>
      <Route path='/signup' element = {<SignUp />} />
      <Route path='/signin' element = {<SignIn />} />
      <Route path='/projects' element = {<Projects />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App