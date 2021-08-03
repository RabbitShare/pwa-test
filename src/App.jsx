import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Worker from './my-worker?worker'

function App() {
  const [count, setCount] = useState(0)

  const runWorker = async() => {
    worker.postMessage('ping')
  }
  const resetMessage = async() => {
    worker.postMessage('clear')
  }

  const worker = new Worker()
  const messageFromWorker = async({ data }) => {
    console.log(data)
  }
  worker.addEventListener('message', messageFromWorker)

  console.log(worker)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <button type="button" onClick={runWorker}>Start</button>
        <button type="button" onClick={resetMessage}>Stop</button>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
