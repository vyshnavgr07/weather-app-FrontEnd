import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Registration from './pages/Registration'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
      <Route path='/registration'   element={<Registration/>}/>
      <Route path='/login'  element={<Login/>} />
      <Route path='/'  element={<Home/>} />
    </Routes>
   
    </>
  )
}

export default App
