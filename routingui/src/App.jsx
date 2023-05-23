import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Profile from './Pages/Profile'
import { Routes , Route } from 'react-router-dom'
import Navbar from './Pages/Navbar' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />

      
    </Routes>
    </>
 
  )
}

export default App
