import { useState } from 'react'
import detroitJSLogo from './assets/detroit-js-logo.jpeg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={detroitJSLogo} className="logo react" alt="Detroit JavaScript logo" />
        </a>
      </div>
      <h1>DetroitJS</h1>
      <h2>Launching 2024...</h2>
      <div className="card">
      </div>
      <p className="read-the-docs">
         <a href="https://twitter.com/detroit_js">Follow us on Twitter @detroitjs</a>
      </p>
    </>
  )
}

export default App
