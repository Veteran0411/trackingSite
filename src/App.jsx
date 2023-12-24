import { useState } from 'react'
import SearchBox from './components/SearchBox'
import Map from './components/Map'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "row",
      width: "100vw", 
      height: "100vh" ,
      }}>
      <div style={{width:"100vw",height:"100%"}}><Map /></div>
      {/* <div style={{width:"50vw",height:"100%"}}><SearchBox /></div> */}
    </div>
  )
}

export default App;
