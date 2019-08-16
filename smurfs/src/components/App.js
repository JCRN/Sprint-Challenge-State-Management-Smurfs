// Import dependencies
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Import contexts
import SmurfContext from '../contexts/SmurfContext'
import SmurfsContext from '../contexts/SmurfsContext'

// Import components
import SmurfyForm from './SmurfyForm'

// Import styles
import './App.css'

export default function App() {
  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(results => {
        console.log('get smurfs results: ', results)
        setSmurfs(results.data)
      })
      .catch(error => console.log('get smurfs error: ', error))
  }, [])

  return (
    <SmurfsContext.Provider value={{ smurfs }}>
      {/* <SmurfContext.Provider value={{ postSmurf }}> */}
      <div className="App">
        <h1>SMURFS! 2.0 W/ CONTEXTS</h1>
        <SmurfyForm />
      </div>
      {/* </SmurfContext.Provider> */}
    </SmurfsContext.Provider>
  )
}
