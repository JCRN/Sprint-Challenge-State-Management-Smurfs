import { createContext } from 'react'

const SmurfContext = createContext({
  name: '',
  age: '',
  height: '',
  id: Date.now()
})

export default SmurfContext
