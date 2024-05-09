import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState("");

  function handleInput(e) {
    setText(e.target.value);
  }

  return (
    <>
      <h1>Kalvium Notes</h1>
      <div className='App'>
        <div className='section'>
          <h2>Input</h2>
          <div id='input'>
            <textarea name="" id="" placeholder='Please type here...' onInput={handleInput}></textarea>
          </div>
        </div>
        <div className='section'>
          <h2>Pro Note</h2>
          <div id='output'>
            <div>{text}</div>
          </div>
        </div>      
      </div>
    </>
  )
}

export default App
