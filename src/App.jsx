import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Work from './pages/Work'
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agency' element={<Agency/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </div>
  )
}

export default App