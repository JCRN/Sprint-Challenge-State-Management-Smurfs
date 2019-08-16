import React, { useContext, useState } from 'react'
import axios from 'axios'

import SmurfContext from '../contexts/SmurfContext'

const SmurfyForm = () => {
  const { addSmurf } = useContext(SmurfsContext)

  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: '',
    id: null
  })

  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    setSmurf({ [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios.post('http://localhost:3333/smurfs', {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
      id: Date.now()
    })
  }

  const getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(results => {
        console.log('get smurfs results: ', results)
        setSmurfs(results.data)
      })
      .catch(error => console.log('get smurfs error: ', error))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Smurfy Name:
          <input
            type="text"
            name="name"
            value={smurf.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          How old is this smurf?:
          <input
            type="text"
            name="age"
            value={smurf.age}
            onChange={handleInputChange}
          />
        </label>
        <label>
          How tall is this smurf in cm?:
          <input
            type="text"
            name="height"
            value={smurf.height}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit your Smurf!</button>
      </form>
      <button onClick={getSmurfs}>Get all of the Smurfs!</button>
    </>
  )
}

export default SmurfyForm
