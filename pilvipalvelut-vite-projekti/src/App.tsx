import { useState } from 'react'
import catLogo from './assets/hiclipart-cat-pic.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.hiclipart.com/free-transparent-background-png-clipart-idhbw" target="_blank">
          <img src={catLogo} className="logo cat" alt="Selfie logo" />
        </a>
      </div>
      <h1>Vite + React + Selfie</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React and Selfie logos to learn more
      </p>
    </>
  )
}

export default App
