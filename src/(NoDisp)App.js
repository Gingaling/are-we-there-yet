import React from 'react'
import Wormy from './Wormy-Blue.png'
import './App. css'

export default function App() {

	function HandleOnClick() {
		const b = document.querySelector('body').createAttribute;{className="noDisPlay"};
		b.class = "noDisplay";
		return 
	}

  return (
    <body className="App">
      <header className="App-header">
        [- ]{' '}
        <p>
          Are We There Yet, <span>Worm</span>?
        </p>
        <img src={Wormy} className="App-logo" alt="Wormy" />
        <button id="startButton" onclick = {HandleOnClick}>Let's Begin
        </button>
      </header>
    </body>
  )
}
