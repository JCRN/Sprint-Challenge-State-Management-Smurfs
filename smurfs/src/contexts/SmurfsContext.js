import { createContext } from 'react'

const SmurfsContext = createContext({
    name: '',
    age: '',
    height: '',
    id: ''

    addSmurf: smurf => {}
})

export default SmurfsContext
