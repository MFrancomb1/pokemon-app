import { useState } from 'react'
import './App.css'
import Pokedex from './components/Pokedex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div className="pokedex-container">
        <Pokedex />
      </div>
    </>
  )
}

export default App
