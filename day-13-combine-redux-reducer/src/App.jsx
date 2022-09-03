import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Todos} from "./component/Todos"

import { Counter } from './component/counter'
function App() {

  return (
    <div className="App">
    <Counter></Counter>

    <Todos></Todos>
    </div>
  )
}

export default App
