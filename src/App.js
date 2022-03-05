import React from 'react'
import Wormy from './Wormy-Brown.gif'
import './App.css'

export default function App() {
  return (
    <body className="App" id="prime-container">
      <header className="App-header">
        <p>
          Are We There Yet, <span>Worm</span>?
        </p>
        <img src={Wormy} className="App-logo" alt="Wormy" />
        <button type="submit" id="startButton">
          Let's onClick
        </button>
      </header>
    </body>
  )
}
