import './App.css'
import ContactLists from './components/Card'
import { UseCardToggle } from './components/UseCardToggle'
// import ContactCard from './components/ContactCard'


function App() {

  // const [] = UseCardToggle(<ContactLists/>)
  return (
    <div className="App">
      {/* <ContactCard/> */}

      <ContactLists/>
    </div>
  )
}

export default App
