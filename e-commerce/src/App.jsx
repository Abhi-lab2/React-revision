import { useState } from 'react'
import logo from './logo.svg'

import { Navbar } from './Components/Navbar'
import { AllRoutes } from './Components/AllRoutes'
// import { Routes,Route } from 'react-router-dom'
// import { Footer } from './Pages/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

    <Navbar/>
   
    <AllRoutes/>
  
    </div>
  )
}

export default App
