import React, { useContext, useState } from 'react'
import axios from 'axios'

import SmurfsContext from '../contexts/SmurfsContext'

const SmurfyForm = value => {
  const { getSmurfs } = useContext(SmurfsContext)
  const [smurf, setSmurf] = useState({})

  const handleSubmit = () => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => console.log('post response: ', response))
      .catch(error => console.log('post-error: ', error))
  }

  const handleInputChange = event => {
    const { name, value } = event.target
    setSmurf({ ...smurf, [name]: value })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Smurfy Name:
          <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          How old is this smurf?:
          <input type="text" name="age" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          How tall is this smurf?:
          <input type="text" name="height" onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit your Smurf!
        </button>
      </form>
      <button onClick={getSmurfs}>Get your Smurfs!</button>
    </>
  )
}

export default SmurfyForm
