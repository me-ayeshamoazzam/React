import React from 'react'
import { Data } from './App'

const ChildC = () => {
  return (
    // Prop drilling:
    // <h1> Child C : {props.firstname}</h1>
    <Data.Consumer>
      {(username) => <h1> My name is {username} </h1>}
    </Data.Consumer>
  )
}

export default ChildC
